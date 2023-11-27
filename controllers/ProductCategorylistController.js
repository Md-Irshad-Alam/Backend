const expressAsyncHandler = require("express-async-handler");


exports.ProductCategorylist{
    name: "product_category",
}


app.get('/products', async (req, res) => {
    try {
        // Get filters from query parameters
        const { category, color, type } = req.query;

        // Build a filter object based on provided parameters
        const filter = {};
        if (category) filter.category = category;
        if (color) filter.color = color;
        if (type) filter.type = type;

        // Query the database using the filter
        const products = await Product.find(filter);

        // Send the filtered products as a response
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

