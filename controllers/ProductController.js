const expressAsyncHandler = require("express-async-handler");
const CommonMessage = require("../helpers/CommonMessage");

const ProductModel = require("../models/ProductModel.js");
const { Types } = require("mongoose");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
exports.uploadImage = upload.single('image'); 

exports.saveProduct = expressAsyncHandler(async (req, res) => {
  try {
    const {
      article_code,
      article_name,
      group,
      category,
      heel_category,
      forepart_category,
      UOM,
      hardness,
      price,
      gstin,
      hsn,
      remark,
      type,
      image,
      tikki,
      tikki_one,
      tikki_two,
      logo_r,
      logo_l,
      outsole,
      midsole,
      bottom,
      side_wall,
      heel,
      fore,
      sidewall_color,
      remarks,
      logo_rs,
      logo_ls,
      outsoles,
      midsoles,
      bottoms,
      side_walls,
      heels,
      fores,
      sidewall_colors,
      remarkss,
      size,
      outSize,
      rate,
      mould,
      outsole_wt,
      sidewall_wt,
      bottom_wt,
      logo_l_wt,
      logo_r_wt,
      sidewall_logo_wt,
      group_id,
      wl_22_1,
      manufactured,
      target,
      dummy_moulds,
      store,
    } = req.body;

    await ProductModel.create({
      article_code,
      article_name,
      group: new Types.ObjectId(group),
      category: new Types.ObjectId(category),
      heel_category: new Types.ObjectId(heel_category),
      forepart_category: new Types.ObjectId(forepart_category),
      UOM: new Types.ObjectId(UOM),
      hardness,
      price,
      gstin,
      hsn,
      remarks,
      type,
      image:file.buffer,
      tikki: new Types.ObjectId(tikki),
      tikki_one: new Types.ObjectId(tikki_one),
      tikki_two: new Types.ObjectId(tikki_two),
      client_ref: {
          logo_r: new Types.ObjectId(logo_r),
          logo_l: new Types.ObjectId(logo_l),
          outsole: new Types.ObjectId(outsole),
          midsole: new Types.ObjectId(midsole),
          bottom: new Types.ObjectId(bottom),
          side_wall: new Types.ObjectId(side_wall),
          heel: new Types.ObjectId(heel),
          fore: new Types.ObjectId(fore),
          sidewall_color,
          remarks,
      },
      production_ref: {
          logo_rs: new Types.ObjectId(logo_rs),
          logo_ls: new Types.ObjectId(logo_ls),
          outsoles: new Types.ObjectId(outsoles),
          midsoles: new Types.ObjectId(midsoles),
          bottoms: new Types.ObjectId(bottoms),
          side_walls: new Types.ObjectId(side_walls),
          heels: new Types.ObjectId(heels),
          fores: new Types.ObjectId(fores),
          sidewall_colors,
          remarkss,
      },
      sizetype_standardweight: {
          size,
          outSize,
          rate,
          mould,
          outsole_wt,
          sidewall_wt,
          bottom_wt,
          logo_l_wt,
          logo_r_wt,
          sidewall_logo_wt,
          group_id,
          wl_22_1,
          manufactured,
          target,
          dummy_moulds,
          store: new Types.ObjectId(store),
      },
  })
      .then(() => {
        res.status(200).json({
          message: CommonMessage.saveProduct.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.saveProduct.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});

exports.getProductCategories = expressAsyncHandler(async (req, res) => {
  try {
    const { search } = req.query
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 1;
    let skip = limit * (page - 1);
    let totalPage = Math.ceil((await ProductModel.countDocuments({ products : new RegExp(search, 'i') })) / limit);
    await ProductModel
      .find({ products : new RegExp(search, 'i') })
      .skip(skip)
      .limit(limit)
      .populate('products')
      .then((result) => {
        res.status(200).json({
          message:
            result.length !== 0
              ? CommonMessage.getallProduct.success
              : CommonMessage.getallProduct.noProduct,
          success: true,
          products: result,
          pagination: { limit, page, totalPage },
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.getallProduct.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {}
});

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      article_code,
      article_name,
      group,
      category,
      heel_category,
      forepart_category,
      UOM,
      hardness,
      price,
      gstin,
      hsn,
      remark,
      type,
      image,
      tikki,
      tikki_one,
      tikki_two,
      logo_r,
      logo_l,
      outsole,
      midsole,
      bottom,
      side_wall,
      heel,
      fore,
      sidewall_color,
      remarks,
      logo_rs,
      logo_ls,
      outsoles,
      midsoles,
      bottoms,
      side_walls,
      heels,
      fores,
      sidewall_colors,
      remarkss,
      size,
      outSize,
      rate,
      mould,
      outsole_wt,
      sidewall_wt,
      bottom_wt,
      logo_l_wt,
      logo_r_wt,
      sidewall_logo_wt,
      group_id,
      wl_22_1,
      manufactured,
      target,
      dummy_moulds,
      store,
    } = req.body;

    await ProductModel.findByIdAndUpdate(
      { _id: id },
      {
        article_code,
        article_name,
        group: new Types.ObjectId(group),
        category: new Types.ObjectId(category),
        heel_category: new Types.ObjectId(heel_category),
        forepart_category: new Types.ObjectId(forepart_category),
        UOM: new Types.ObjectId(UOM),
        hardness,
        price,
        gstin,
        hsn,
        remarks,
        type,
        image,
        tikki: new Types.ObjectId(tikki),
        tikki_one: new Types.ObjectId(tikki_one),
        tikki_two: new Types.ObjectId(tikki_two),
        client_ref: {
            logo_r: new Types.ObjectId(logo_r),
            logo_l: new Types.ObjectId(logo_l),
            outsole: new Types.ObjectId(outsole),
            midsole: new Types.ObjectId(midsole),
            bottom: new Types.ObjectId(bottom),
            side_wall: new Types.ObjectId(side_wall),
            heel: new Types.ObjectId(heel),
            fore: new Types.ObjectId(fore),
            sidewall_color,
            remarks,
        },
        production_ref: {
            logo_rs: new Types.ObjectId(logo_rs),
            logo_ls: new Types.ObjectId(logo_ls),
            outsoles: new Types.ObjectId(outsoles),
            midsoles: new Types.ObjectId(midsoles),
            bottoms: new Types.ObjectId(bottoms),
            side_walls: new Types.ObjectId(side_walls),
            heels: new Types.ObjectId(heels),
            fores: new Types.ObjectId(fores),
            sidewall_colors,
            remarkss,
        },
        sizetype_standardweight: {
            size,
            outSize,
            rate,
            mould,
            outsole_wt,
            sidewall_wt,
            bottom_wt,
            logo_l_wt,
            logo_r_wt,
            sidewall_logo_wt,
            group_id,
            wl_22_1,
            manufactured,
            target,
            dummy_moulds,
            store: new Types.ObjectId(store),
        },
    },
      { new: true }
    )
      .then(() => {
        res.status(200).json({
          message: CommonMessage.updateProduct.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.updateProduct.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    await ProductModel.findByIdAndDelete(id)
      .then(() => {
        res.status(200).json({
          message: CommonMessage.deleteProduct.success,
          success: true,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: CommonMessage.deleteProduct.failed,
          success: false,
          error: error.toString(),
        });
      });
  } catch (error) {
    res.status(500).json(CommonMessage.commonError(error));
  }
});
