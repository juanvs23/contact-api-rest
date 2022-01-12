const { validationResult } = require("express-validator");


const validateFields = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 400,
      data: errors,
    });
  }
  next();
};

const checkId = async (req, res, next) => {
  const  id  = req.params;

  const checkId = await User.findOne({ id });
  console.log(objectId);
  if ( !checkId ) {
    return res.status(400).json({
      status: 400,
      data: {
        error: "contacto",
        msg: `El contacto no existe`,
      },
    });
  }
  next();
};

module.exports = {
  validateFields,
  checkId,
};
