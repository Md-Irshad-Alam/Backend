const Router = require('express').Router()

const { saveArticleGroupMaster, updateArticleGroupMaster, deleteArticleGroupMaster, getallArticleGroupMaster } = require('../controllers/ArticleGroupMasterController.js')
const validate  = require('../helpers/Validate')
const { ArticleGroupMastervalidation, updateArticleGroupMastervalidation, deleteArticleGroupMastervalidation } = require('../validation/ArticleGroupMasterValidation.js')


Router.route('/add-ArticleGroupMaster').post([ArticleGroupMastervalidation, validate], saveArticleGroupMaster)
Router.route('/update-ArticleGroupMaster/:id').put([updateArticleGroupMastervalidation, validate], updateArticleGroupMaster)
Router.route('/get-ArticleGroupMaster').get(getallArticleGroupMaster)
Router.route('/delete-ArticleGroupMaster/:id').delete([deleteArticleGroupMastervalidation, validate], deleteArticleGroupMaster)

module.exports = Router