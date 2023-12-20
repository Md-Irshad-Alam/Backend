module.exports = {
  commonError: (error) => {
    return {
      message: 'Something wrong!',
      success: false,
      error: error.toString(),
    };
  },
  middleware: {
    notoken: 'Provide token for perform this operation',
    validtoken: 'Provide a valid token for perform this operation',
    notvaliduser: 'You are not a valid user on this platform',
    notactive:
      'Your profile has been deactivated contact with admin for activate your account',
    superadmin: 'Only super admin can perform this operation',
  },
  validationError: (errors) => {
    return {
      message: 'Please fill all mandatory field',
      success: false,
      errors: errors,
    };
  },
  addpermission: {
    success: 'New permission is successfully add',
    failed: 'Permission add process failed',
  },
  editpermission: {
    success: 'Permission is successfully updated',
    failed: 'Permission update process failed',
  },
  removepermission: {
    success: 'Permission is successfully removed',
    failed: 'Permission remove process failed',
  },
  toogleprmission: {
    active: 'Permission is successfully active',
    deactive: 'Permission is successfully deactive',
    failed: 'Permission active or deactive process failed',
  },

  registerUser: {
    success:
      'You are successfully registered. Your account will be activated soon',
    failed: 'Your registration process failed',
  },
  loginUser: {
    success: 'Login Successful',
    nouser: 'Incorrect username or password',
    notactive:
      'Your account is not active please wait for activate your account',
    failed: 'Login process failed please try after some time',
    wrong: 'Wrong Password!',
    exist: 'User is not exist with this email',
  },
  forgetPassword: {
    success: 'OTP send to your email',
    failed: 'Please enter correct email id',
  },
  verifyOtp: {
    success: 'Otp is verified',
    failed: 'Otp is wrong. Please enter correct Otp',
  },
  resetPassword: {
    success: 'Password is updated successfully',
    wrong: 'Otp is wrong. Please enter correct Otp',
    failed: 'Password is not set. Please try again',
    oldpassword: 'You can not use old password',
  },
  logout: {
    success: 'Logout success. Please visit again 🙏',
    failed: 'Logout process failed',
  },
  storesave: {
    success: 'Store added successfully',
    failed: 'Store is not added successfully. Please try again',
  },
  saveUOM: {
    success: 'UOM added successfully ',
    failed: 'Faild to add Uom',
  },
  updatestore: {
    success: 'Store details is successfully updated',
    failed: 'Store details update process failed',
  },
  getallstore: {
    success: 'All store are successfully fetched',
    failed: 'Store fetching process failed',
    nostore: 'No store found',
  },
  togglestore: {
    active: 'Store successfully activated',
    deactive: 'Store successfully deactivated',
    failed: 'Store active deactive process failed',
    notfound: 'Store details not found',
  },
  deletestore: {
    success: 'Store is successfully deleted',
    failed: 'Store delete process failed',
  },
  savecolor: {
    success: 'Color added successfully',
    failed: 'Color is not added successfully. Please try again',
  },
  updatecolor: {
    success: 'Color details is successfully updated',
    failed: 'Color details update process failed',
  },
  getallcolor: {
    success: 'All color are successfully fetched',
    failed: 'Color fetching process failed',
    nocolor: 'No color found',
  },
  togglecolor: {
    active: 'Color successfully activated',
    deactive: 'Color successfully deactivated',
    failed: 'Color active deactive process failed',
    notfound: 'Color details not found',
  },
  deletecolor: {
    success: 'Color is successfully deleted',
    failed: 'Color delete process failed',
  },
  savedesignation: {
    success: 'Designation added successfully',
    failed: 'Designation is not added successfully. Please try again',
  },
  updatedesignation: {
    success: 'Designation details is successfully updated',
    failed: 'Designation details update process failed',
  },
  getalldesignation: {
    success: 'All designation are successfully fetched',
    failed: 'Designation fetching process failed',
    nodesignation: 'No designation found',
  },
  toggledesignation: {
    active: 'Designation successfully activated',
    deactive: 'Designation successfully deactivated',
    failed: 'Designation active deactive process failed',
    notfound: 'Designation details not found',
  },
  deletedesignation: {
    success: 'Designation is successfully deleted',
    failed: 'Designation delete process failed',
  },
  savecountry: {
    success: 'Country added successfully',
    failed: 'Country is not added successfully. Please try again',
  },
  updatecountry: {
    success: 'Country details is successfully updated',
    failed: 'Country details update process failed',
  },
  getallcountry: {
    success: 'All country are successfully fetched',
    failed: 'Country fetching process failed',
    nocountry: 'No Country found',
  },
  togglecountry: {
    active: 'Country successfully activated',
    deactive: 'Country successfully deactivated',
    failed: 'Country active deactive process failed',
    notfound: 'Country details not found',
  },
  deletecountry: {
    success: 'Country is successfully deleted',
    failed: 'Country delete process failed',
  },
  savecustomer: {
    success: 'Customer added successfully',
    failed: ' Customer is not added successfully. Please try again',
  },
  saveShipaddress: {
    success: 'ship address added successfully',
    failed: ' ship address unsuccessfully. Please try again',
  },
  savebilladdress: {
    success: 'Bill address added successfully',
    failed: ' Bill address unsuccessfully. Please try again',
  },
  updateBilladdress: {
    success: 'Customer added successfully',
    failed: ' Customer is not added successfully. Please try again',
  },
  updateShipaddress: {
    success: 'Ship address updated successfully',
    failed: ' ship address not updated successfully. Please try again',
  },
  updatecustomer: {
    success: 'Customer successfully updated',
    failed: 'Customer update process failed',
  },
  deleteCustomer: {
    success: 'Customer successfully deleted',
    failed: ' Customer is not deleted successfully. Please try again',
  },
  getallcustomer: {
    success: 'All Customer are successfully fetched',
    failed: 'Customer fetching process failed',
    nocustomer: 'No customer found',
  },
  updateUOM: {
    success: 'Currency details is successfully updated',
    failed: 'Currency details update process failed',
  },
  getallUOM: {
    success: 'UOM are successfully fetched',
    failed: 'UOM fetching process failed',
    nocountry: 'UOM state found',
  },
  toggleUOM: {
    active: 'UOM successfully activated',
    deactive: 'UOM successfully deactivated',
    failed: 'UOM active deactive process failed',
    notfound: 'UOM details not found',
  },
  deleteUOM: {
    success: 'UOM is successfully deleted',
    failed: 'UOM delete process failed',
  },
  saveForePartCategory: {
    success: 'ForePartCategory added successfully',
    failed: 'ForePartCategory is not added successfully. Please try again',
  },
  updateForePartCategory: {
    success: 'ForePartCategory details is successfully updated',
    failed: 'ForePartCategory details update process failed',
  },
  getallForePartCategory: {
    success: 'All ForePartCategory are successfully fetched',
    failed: 'ForePartCategory fetching process failed',
    nocountry: 'No ForePartCategory found',
  },
  toggleForePartCategory: {
    active: 'ForePartCategory successfully activated',
    deactive: 'ForePartCategory successfully deactivated',
    failed: 'ForePartCategory active deactive process failed',
    notfound: 'ForePartCategory details not found',
  },
  deleteForePartCategory: {
    success: 'ForePartCategory is successfully deleted',
    failed: 'ForePartCategory delete process failed',
  },
  saveHeelCategory: {
    success: 'HeelCategory added successfully',
    failed: 'HeelCategory is not added successfully. Please try again',
  },
  updateHeelCategory: {
    success: 'HeelCategory details is successfully updated',
    failed: 'HeelCategory details update process failed',
  },
  getallHeelCategory: {
    success: 'All HeelCategory are successfully fetched',
    failed: 'HeelCategory fetching process failed',
    nocountry: 'No HeelCategory found',
  },
  toggleHeelCategory: {
    active: 'HeelCategory successfully activated',
    deactive: 'HeelCategory successfully deactivated',
    failed: 'HeelCategory active deactive process failed',
    notfound: 'HeelCategory details not found',
  },
  deleteHeelCategory: {
    success: 'HeelCategory is successfully deleted',
    failed: 'HeelCategory delete process failed',
  },
  saveEmployeeCategory: {
    success: 'EmployeeCategory added successfully',
    failed: 'EmployeeCategory is not added successfully. Please try again',
  },
  updateEmployeeCategory: {
    success: 'EmployeeCategory details is successfully updated',
    failed: 'EmployeeCategory details update process failed',
  },
  getallEmployeeCategory: {
    success: 'AllEmployeeCategory are successfully fetched',
    failed: 'EmployeeCategory fetching process failed',
    nocountry: 'No EmployeeCategory found',
  },
  toggleEmployeeCategory: {
    active: 'EmployeeCategory successfully activated',
    deactive: 'EmployeeCategory successfully deactivated',
    failed: 'EmployeeCategory active deactive process failed',
    notfound: 'EmployeeCategory details not found',
  },
  deleteEmployeeCategory: {
    success: 'EmployeeCategory is successfully deleted',
    failed: 'EmployeeCategory delete process failed',
  },
  saveIngredient: {
    success: 'Ingredient added successfully',
    failed: 'Ingredient is not added successfully. Please try again',
  },
  updateIngredient: {
    success: 'Ingredient details is successfully updated',
    failed: 'Ingredient details update process failed',
  },
  getallIngredient: {
    success: 'AllIngredient are successfully fetched',
    failed: 'Ingredient fetching process failed',
    nocountry: 'No Ingredient found',
  },
  toggleIngredient: {
    active: 'Ingredient successfully activated',
    deactive: 'Ingredient successfully deactivated',
    failed: 'Ingredient active deactive process failed',
    notfound: 'Ingredient details not found',
  },
  deleteIngredient: {
    success: 'Ingredient is successfully deleted',
    failed: 'Ingredient delete process failed',
  },
  saveType: {
    success: 'Type added successfully',
    failed: 'Type is not added successfully. Please try again',
  },
  updateType: {
    success: 'Type details is successfully updated',
    failed: 'Type details update process failed',
  },
  getallType: {
    success: 'AllType are successfully fetched',
    failed: 'Type fetching process failed',
    nocountry: 'No Type found',
  },
  toggleType: {
    active: 'Type successfully activated',
    deactive: 'Type successfully deactivated',
    failed: 'Type active deactive process failed',
    notfound: 'Type details not found',
  },
  deleteType: {
    success: 'Type is successfully deleted',
    failed: 'Type delete process failed',
  },
  saveArticleGroupMaster: {
    success: 'Group added successfully',
    failed: 'Group is not added successfully. Please try again',
  },
  updateArticleGroupMaster: {
    success: 'Group details is successfully updated',
    failed: 'Group details update process failed',
  },
  getallArticleGroupMaster: {
    success: 'Group are successfully fetched',
    failed: 'Group fetching process failed',
    nocountry: 'No Group found',
  },
  toggleArticleGroupMaster: {
    active: 'Group successfully activated',
    deactive: 'Group successfully deactivated',
    failed: 'Group active deactive process failed',
    notfound: 'Group details not found',
  },
  deleteArticleGroupMaster: {
    success: 'Group is successfully deleted',
    failed: 'Group delete process failed',
  },
  saveCurrency: {
    success: 'Currency added successfully',
    failed: 'Currency is not added successfully. Please try again',
  },
  updateCurrency: {
    success: 'Currency details is successfully updated',
    failed: 'Currency details update process failed',
  },
  getallCurrency: {
    success: 'AllCurrency are successfully fetched',
    failed: 'Currency fetching process failed',
    nocountry: 'No Currency found',
  },
  toggleCurrency: {
    active: 'Currency successfully activated',
    deactive: 'Currency successfully deactivated',
    failed: 'Currency active deactive process failed',
    notfound: 'Currency details not found',
  },
  deleteCurrency: {
    success: 'Currency is successfully deleted',
    failed: 'Currency delete process failed',
  },
  savestateMaster: {
    success: 'state added successfully',
    failed: 'state is not added successfully. Please try again',
  },
  updatestateMaster: {
    success: 'state details is successfully updated',
    failed: 'state details update process failed',
  },
  getallstateMaster: {
    success: 'Allstate are successfully fetched',
    failed: 'state fetching process failed',
    nocountry: 'No state found',
  },
  togglestateMaster: {
    active: 'state successfully activated',
    deactive: 'state successfully deactivated',
    failed: 'state active deactive process failed',
    notfound: 'state details not found',
  },
  deletestateMaster: {
    success: 'state is successfully deleted',
    failed: 'state delete process failed',
  },
  saveAddEmployee: {
    success: 'Employee added successfully',
    failed: 'Employee is not added successfully. Please try again',
  },
  updateAddEmployee: {
    success: 'Employee details is successfully updated',
    failed: 'Employee details update process failed',
  },
  getallAddEmployee: {
    success: 'Employee are successfully fetched',
    failed: 'Employee fetching process failed',
    notfound: 'Employee Not found',
  },
  toggleAddEmployee: {
    active: 'Employee successfully activated',
    deactive: 'Employee successfully deactivated',
    failed: 'Employee active deactive process failed',
    notfound: 'Employee details not found',
  },
  deleteAddEmployee: {
    success: 'Employee is successfully deleted',
    failed: 'Employee delete process failed',
  },
  saveProductCategory: {
    success: 'Category added successfully',
    failed: 'Category is not added successfully. Please try again',
  },
  updateProductCategory: {
    success: 'Category details is successfully updated',
    failed: 'Category details update process failed',
  },
  getallProductCategory: {
    success: 'Category are successfully fetched',
    failed: 'Category fetching process failed',
    notfound: 'Category AddCategory found',
  },
  toggleProductCategory: {
    active: 'Category successfully activated',
    deactive: 'Category successfully deactivated',
    failed: 'Category active deactive process failed',
    notfound: 'Category details not found',
  },
  deleteProductCategory: {
    success: 'Category is successfully deleted',
    failed: 'Category delete process failed',
  },
  saveProductlsit: {
    success: 'Category added successfully',
    failed: 'Category is not added successfully. Please try again',
  },
  updateProductlsit: {
    success: 'Category details is successfully updated',
    failed: 'Category details update process failed',
  },
  getallProductlsit: {
    success: 'Category are successfully fetched',
    failed: 'Category fetching process failed',
    notfound: 'Category Productlsit found',
  },
  toggleProductlsit: {
    active: 'Category successfully activated',
    deactive: 'Category successfully deactivated',
    failed: 'Category active deactive process failed',
    notfound: 'Category details not found',
  },
  deleteProductlsit: {
    success: 'Category is successfully deleted',
    failed: 'Category delete process failed',
  },
  saveProduct: {
    success: 'Product added successfully',
    failed: 'Product is not added successfully. Please try again',
  },
  updateProduct: {
    success: 'Product details is successfully updated',
    failed: 'Product details update process failed',
  },
  getallProduct: {
    success: 'Product are successfully fetched',
    failed: 'Product fetching process failed',
    notfound: 'Product Product found',
  },
  toggleProduct: {
    active: 'Product successfully activated',
    deactive: 'Product successfully deactivated',
    failed: 'Product active deactive process failed',
    notfound: 'Product details not found',
  },
  deleteProduct: {
    success: 'Product is successfully deleted',
    failed: 'Product delete process failed',
  },
};
