const path = require('path');
const fs = require('fs');
const AdminJS = require('adminjs')

/** @type {AdminJS.After<AdminJS.ActionResponse>} */
const after = async (response, request, context) => {
 

  const { record, mainImage } = context;
  
  if (record.isValid() && mainImage ) {
  
    const filePath = path.join('uploads', record.id().toString(), mainImage.name);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    await fs.promises.rename(mainImage.path, filePath);

    await record.update({ mainImageLocation: `/${filePath}` });
  }
  return response;
};

/** @type {AdminJS.Before} */
const before = async (request, context) => {
 
  if (request.method === 'post') {
    const { mainImage, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.mainImage = mainImage;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };