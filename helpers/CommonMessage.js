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
    },
    updatestore: {
        success: "Store details is successfully updated",
        failed: "Store details update process failed",
    },
    getallstore: {
        success: "All store are successfully fetched",
        failed: "Store fetching process failed",
        nostore: "No store found"
    },
    togglestore: {
        active: "Store successfully activated",
        deactive: "Store successfully deactivated",
        failed: "Store active deactive process failed",
        notfound: "Store details not found"
    },
    deletestore: {
        success: "Store is successfully deleted",
        failed: "Store delete process failed",
    },
    savecolor: {
        success: 'Color added successfully',
        failed: 'Color is not added successfully. Please try again'
    },
    updatecolor: {
        success: "Color details is successfully updated",
        failed: "Color details update process failed",
    },
    getallcolor: {
        success: "All color are successfully fetched",
        failed: "Color fetching process failed",
        nocolor: "No color found"
    },
    togglecolor: {
        active: "Color successfully activated",
        deactive: "Color successfully deactivated",
        failed: "Color active deactive process failed",
        notfound: "Color details not found"
    },
    deletecolor: {
        success: "Color is successfully deleted",
        failed: "Color delete process failed",
    },
    savedesignation: {
        success: 'Designation added successfully',
        failed: 'Designation is not added successfully. Please try again'
    },
    updatedesignation: {
        success: "Designation details is successfully updated",
        failed: "Designation details update process failed",
    },
    getalldesignation: {
        success: "All designation are successfully fetched",
        failed: "Designation fetching process failed",
        nodesignation: "No designation found"
    },
    toggledesignation: {
        active: "Designation successfully activated",
        deactive: "Designation successfully deactivated",
        failed: "Designation active deactive process failed",
        notfound: "Designation details not found"
    },
    deletedesignation: {
        success: "Designation is successfully deleted",
        failed: "Designation delete process failed",
    },
    savecountry: {
        success: 'Country added successfully',
        failed: 'Country is not added successfully. Please try again'
    },
    updatecountry: {
        success: "Country details is successfully updated",
        failed: "Country details update process failed",
    },
    getallcountry: {
        success: "All country are successfully fetched",
        failed: "Country fetching process failed",
        nocountry: "No Country found"
    },
    togglecountry: {
        active: "Country successfully activated",
        deactive: "Country successfully deactivated",
        failed: "Country active deactive process failed",
        notfound: "Country details not found"
    },
    deletecountry: {
        success: "Country is successfully deleted",
        failed: "Country delete process failed",
    }
}