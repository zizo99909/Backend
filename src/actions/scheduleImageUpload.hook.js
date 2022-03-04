const path = require('path');
const fs = require('fs');
const AdminJS = require('adminjs')

/** @type {AdminJS.After<AdminJS.ActionResponse>} */
const after = async (response, request, context) => {
 // console.log('entered')

  const { record, scheduleImage } = context;
  
  if (record.isValid() && scheduleImage ) {
  
    const filePath = path.join('uploads', record.id().toString(), scheduleImage.name);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    await fs.promises.rename(scheduleImage.path, filePath);

    await record.update({ scheduleImageLocation: `/${filePath}` });
  }
  return response;
};

/** @type {AdminJS.Before} */
const before = async (request, context) => {
 // console.log('enetered2')
  if (request.method === 'post') {
    const { scheduleImage, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.scheduleImage = scheduleImage;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };