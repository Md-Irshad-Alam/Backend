module.exports = {
    commonError: (error) => {
        return { message: "Something wrong!", success: false, error: error.toString() }
    },
    validationError: (errors) => {
        return { message: "Please fill all mandatory field", success: false, errors: errors }
    },
    registerUser: {
        success: 'You are successfully registered. Your account will be activated soon',
        failed: 'Your registration process failed'
    },
    loginUser: {
        success: 'Login Successful',
        nouser: 'Incorrect username or password',
        notactive: 'Your account is not active please wait for activate your account',
        failed: 'Login process failed please try after some time',
        wrong: 'Wrong Password!'
    },
    forgetPassword: {
        success: 'OTP send to your email',
        failed: 'Please enter correct email id'
    },
    verifyOtp: {
        success: 'Otp is verified',
        failed: 'Otp is wrong. Please enter correct Otp'
    },
    resetPassword: {
        success: 'Password is updated successfully',
        wrong: 'Otp is wrong. Please enter correct Otp',
        failed: 'Password is not set. Please try again',
        oldpassword: 'You can not use old password'
    },
    logout: {
        success: 'Logout success. Please visit again 🙏',
        failed: 'Logout process failed'
    },
    storesave: {
        success: 'Store added successfully',
        failed: 'Store is not added successfully. Please try again'
    }
}