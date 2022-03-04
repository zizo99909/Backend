const path = require('path');
const fs = require('fs');
const AdminJS = require('adminjs')

/** @type {AdminJS.After<AdminJS.ActionResponse>} */
const after = async (response, request, context) => {
 // console.log('entered')

  const { record, secondaryImage } = context;
  
  if (record.isValid() && secondaryImage ) {
  
    const filePath = path.join('uploads', record.id().toString(), secondaryImage.name);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    await fs.promises.rename(secondaryImage.path, filePath);

    await record.update({ secondaryImageLocation: `/${filePath}` });
  }
  return response;
};

/** @type {AdminJS.Before} */
const before = async (request, context) => {
 // console.log('enetered2')
  if (request.method === 'post') {
    const { secondaryImage, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.secondaryImage = secondaryImage;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };