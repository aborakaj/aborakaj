import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../core/services/auth.service';


// Custom validator function to compare passwords
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'passwordMismatch': true };
  }

  return null;
}

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  user = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
   
  };

  displayDialog: boolean = false;


  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService) {
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
     
    }, {
      validator: passwordMatchValidator // Apply custom validator to the whole form
    });
  }

  showDialog() {
    this.displayDialog = true;
  }

  onClose() {
    this.displayDialog = false;
    this.userForm.reset();
    
  }

  saveUser() {
    if (this.userForm.valid) {
      const userData = { ...this.userForm.value };
    
      // Remove the "confirmPassword" field from the userData object
      delete userData.confirmPassword;

      
      // Retrieve the JWT token from wherever it's stored in your application
      const jwtToken = this.authService.getToken() // Assuming the token is stored in localStorage
      console.log(jwtToken)
  
      // Ensure that the token is available before making the request
      if (!jwtToken) {
        console.error('JWT token not found');
        return;
      }
  
      // Define headers with JWT token
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + jwtToken,
        'Content-Type': 'application/json' // Assuming you're sending JSON data
      });
  
      
      this.http.post('http://localhost:3000/user', userData, { headers })
        .subscribe(response => {
          // Handle response from the backend if necessary
          console.log('User data saved successfully:', response);
          this.userForm.reset(); // Clear form after successful submission
        }, error => {
          // Handle error if request fails
          console.error('Error saving user data:', error);
        });
    }
  }
}
