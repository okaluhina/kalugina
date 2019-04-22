const Company = require('../models/company.model');

module.exports = {
  get: async (req, res) => {
    const {
      pageNumber,
      pageSize,
      sortBy,
      sortOrder,
      queryString,
      cleaningKind
    } = req.query
 
    //validate params
    const queryRegExp = new RegExp(queryString, 'i');

    const companies = await Company    
      .find({
        title: queryRegExp,
        isDeleted: false,
        // user.status.active
        [`services.${cleaningKind}.isAvailable`]: true
      })
      .populate('user', 'email', 'status')
      .skip((pageNumber - 1) * pageSize)
      .limit(Number.parseInt(pageSize))
      .sort({[sortBy]: sortOrder})
      //to exclude  pass 0
      .select({title: 1, description: 1, user: 1})
      .exec();
    
    res.send(companies);
  },
  getById: async (req, res) => {
    //проверка паараметра id, база выдает ошибку если в ид ерунда
    //mongoose.Types.ObjectId.isValid('your id here');
    const companyId = req.params;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).send('Company with given ID not found.')
    } else if (company.isDeleted) {
      return res.status(404).send('Company with given ID deleted.')
    }

    res.send(company)
  },
  put: async (req, res) => {
    //validate body and id
    const companyId = req.params.id;
    const newCompany = req.body
    const company = await Company.findByIdAndUpdate(
      companyId,
      newCompany,
      { new: true }
    );

    if (!company) return res.status(404).send('The company was not found.');
    
    res.send(company);
  },
}



