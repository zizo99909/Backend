const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const argon2 = require('argon2')
const mongoose = require("mongoose");
const Client = require("../models/client");
const HomePage = require("../models/homePage");
const GymPage = require('../models/gymPage')
const BalletPage=require('../models/balletPage')
const FitnessPage=require('../models/fitnessPage')
const MainImage =  require('../models/mainImage')
const Table = require('../models/table')
const Admin =  require('../models/admin')
const{
  after:passwordAfterHook,
  before:passwordBeforeHook
} = require("../actions/password.hook")

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require("../actions/imageUpload.hook");

const {
  after: scheduleUploadAfterHook,
  before: scheduleUploadBeforeHook,
} = require("../actions/scheduleImageUpload.hook");

const {
  after: mainUploadAfterHook,
  before: mainUploadBeforeHook,
} = require("../actions/mainImageUpload.hook");



AdminJS.registerAdapter(AdminJSMongoose);

const adminJs = new AdminJS({
  databases: [mongoose],
  resources: [
    {
      resource: Client,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          _id:{
            isVisible:false
          }
        },
      },
    },
    {
      resource: HomePage,

      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          image: {
            components: {
              edit: AdminJS.bundle("../components/imageUpload.edit.tsx"),
              list: AdminJS.bundle("../components/imageUpload.list.tsx"),
            },
          },
          imageLocation: {
            isVisible: false,
          },
          _id:{
            isVisible:false
          }
        },
        actions: {
          new: {
            after: async (response, request, context) => {
              const afterHook = await uploadAfterHook(
                response,
                request,
                context
              );
              return afterHook;
            },
            before: async (request, context) => {
              const beforeHook = await uploadBeforeHook(request, context);
              return beforeHook;
            },
          },
          edit: {
            after: async (response, request, context) => {
              const afterHook = await uploadAfterHook(
                response,
                request,
                context
              );
              return afterHook;
            },
            before: async (request, context) => {
              const beforeHook = await uploadBeforeHook(request, context);
              return beforeHook;
            },
          },
          delete:{
            isAccessible:false
          },
        },
      },
    },
    {
      resource: MainImage,

      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          image: {
            components: {
              edit: AdminJS.bundle("../components/imageUpload.edit.tsx"),
              list: AdminJS.bundle("../components/imageUpload.list.tsx"),
            },
          },
          imageLocation: {
            isVisible: false,
          },
          _id:{
            isVisible:false
          },
          secret:{
            isVisible:false
          }
        },
        actions: {
          new: {
            after: async (response, request, context) => {
              const afterHook = await uploadAfterHook(
                response,
                request,
                context
              );
              return afterHook;
            },
            before: async (request, context) => {
              const beforeHook = await uploadBeforeHook(request, context);
              return beforeHook;
            },
          },
          edit: {
            after: async (response, request, context) => {
              const afterHook = await uploadAfterHook(
                response,
                request,
                context
              );
              return afterHook;
            },
            before: async (request, context) => {
              const beforeHook = await uploadBeforeHook(request, context);
              return beforeHook;
            },
          },
          delete:{
            isAccessible:false
          },
        },
      },
    },
    {
      resource: GymPage,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          title: {
            isVisible: false,
          },
          scheduleImage: {
            components: {
              edit: AdminJS.bundle(
                "../components/scheduleImageUpload.edit.tsx"
              ),
              list: AdminJS.bundle(
                "../components/scheduleImageUpload.list.tsx"
              ),
            },
          },
          scheduleImageLocation: {
            isVisible: false,
          },
          mainImage: {
            components: {
              edit: AdminJS.bundle("../components/mainImageUpload.edit.tsx"),
              list: AdminJS.bundle("../components/mainImageUpload.list.tsx"),
            },
          },
          mainImageLocation: {
            isVisible: false,
          },
          _id:{
            isVisible:false
          }
        },
        actions: {
          new: {
            after: async (response, request, context) => {
              
              const modifiedResponse2 = await mainUploadAfterHook(
                response,
                request,
                context
              );
              return scheduleUploadAfterHook(
                modifiedResponse2,
                request,
                context
              );
            },

            before: async (request, context) => {

             
              const modifiedRequest2 = await mainUploadBeforeHook(
               request,
                context
              );
           
              return scheduleUploadBeforeHook(modifiedRequest2, context);
            },
          },
          edit: {
            after: async (response, request, context) => {
              
              const modifiedResponse2 = await mainUploadAfterHook(
                response,
                request,
                context
              );

              return scheduleUploadAfterHook(
                modifiedResponse2,
                request,
                context
              );
            },

            before: async (request, context) => {
            
              const modifiedRequest2 = await mainUploadBeforeHook(
                request,
                context
              );

              return scheduleUploadBeforeHook(modifiedRequest2, context);
            },
          },delete:{
            isAccessible:false
          },
        },
      },
    },
    {
      resource: BalletPage,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          title: {
            isVisible: false,
          },
          scheduleImage: {
            components: {
              edit: AdminJS.bundle(
                "../components/scheduleImageUpload.edit.tsx"
              ),
              list: AdminJS.bundle(
                "../components/scheduleImageUpload.list.tsx"
              ),
            },
          },
          scheduleImageLocation: {
            isVisible: false,
          },
          mainImage: {
            components: {
              edit: AdminJS.bundle("../components/mainImageUpload.edit.tsx"),
              list: AdminJS.bundle("../components/mainImageUpload.list.tsx"),
            },
          },
          mainImageLocation: {
            isVisible: false,
          },
          
          _id:{
            isVisible:false
          }
        },
        actions: {
          new: {
            after: async (response, request, context) => {
            
              const modifiedResponse2 = await mainUploadAfterHook(
                response,
                request,
                context
              );
              return scheduleUploadAfterHook(
                modifiedResponse2,
                request,
                context
              );
            },

            before: async (request, context) => {
             
              const modifiedRequest2 = await mainUploadBeforeHook(
                request,
                context
              );

              return scheduleUploadBeforeHook(modifiedRequest2, context);
            },
          },
          edit: {
            after: async (response, request, context) => {
              
              const modifiedResponse2 = await mainUploadAfterHook(
                response,
                request,
                context
              );

              return scheduleUploadAfterHook(
                modifiedResponse2,
                request,
                context
              );
            },

            before: async (request, context) => {
              
              const modifiedRequest2 = await mainUploadBeforeHook(
                request,
                context
              );

              return scheduleUploadBeforeHook(modifiedRequest2, context);
            },
          },
          delete:{
            isAccessible:false
          },
        },
      },
    },
    {
      resource: FitnessPage,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          title: {
            isVisible: false,
          },
          scheduleImage: {
            components: {
              edit: AdminJS.bundle(
                "../components/scheduleImageUpload.edit.tsx"
              ),
              list: AdminJS.bundle(
                "../components/scheduleImageUpload.list.tsx"
              ),
            },
          },
          scheduleImageLocation: {
            isVisible: false,
          },
          mainImage: {
            components: {
              edit: AdminJS.bundle("../components/mainImageUpload.edit.tsx"),
              list: AdminJS.bundle("../components/mainImageUpload.list.tsx"),
            },
          },
          mainImageLocation: {
            isVisible: false,
          },
          
          _id:{
            isVisible:false
          }
        },
        actions: {
          new: {
            after: async (response, request, context) => {
             
              const modifiedResponse2 = await mainUploadAfterHook(
                response,
                request,
                context
              );
              return scheduleUploadAfterHook(
                modifiedResponse2,
                request,
                context
              );
            },

            before: async (request, context) => {
             
              const modifiedRequest2 = await mainUploadBeforeHook(
                request,
                context
              );

              return scheduleUploadBeforeHook(modifiedRequest2, context);
            },
          },
          edit: {
            after: async (response, request, context) => {
              
              const modifiedResponse2 = await mainUploadAfterHook(
                response,
                request,
                context
              );

              return scheduleUploadAfterHook(
                modifiedResponse2,
                request,
                context
              );
            },

            before: async (request, context) => {
              
              const modifiedRequest2 = await mainUploadBeforeHook(
                request,
                context
              );

              return scheduleUploadBeforeHook(modifiedRequest2, context);
            },
          },
          delete:{
            isAccessible:false
          },
        },
      },
    },
    {
      resource: Table,

      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          image: {
            components: {
              edit: AdminJS.bundle("../components/imageUpload.edit.tsx"),
              list: AdminJS.bundle("../components/imageUpload.list.tsx"),
            },
          },
          imageLocation: {
            isVisible: false,
          },
          _id:{
            isVisible:false
          },
        },
        actions: {
          new: {
            after: async (response, request, context) => {
              const afterHook = await uploadAfterHook(
                response,
                request,
                context
              );
              return afterHook;
            },
            before: async (request, context) => {
              const beforeHook = await uploadBeforeHook(request, context);
              return beforeHook;
            },
          },
          edit: {
            after: async (response, request, context) => {
              const afterHook = await uploadAfterHook(
                response,
                request,
                context
              );
              return afterHook;
            },
            before: async (request, context) => {
              const beforeHook = await uploadBeforeHook(request, context);
              return beforeHook;
            },
          },
         
        },
      },
    },
    {
      resource: Admin,
      options: {
        properties: {
          updatedAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          createdAt: {
            isVisible: {
              show: true,
              edit: false,
              filter: false,
              list: false,
            },
          },
          encryptedPassword:{
            isVisible:false
          },
          password:{
            type:'password',
          },
          _id:{
            isVisible:false
          }
        },
        actions:{
          new:{
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.email === 'dev@slimnasticsstudio.com',
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.email === 'passant@slimnasticsstudio.com',
           after: passwordAfterHook,
           before:passwordBeforeHook
          },
          edit:{
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.email === 'dev@slimnasticsstudio.com',
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.email === 'passant@slimnasticsstudio.com',
            after: passwordAfterHook,
            before:passwordBeforeHook
          },
          delete:{
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.email === 'dev@slimnasticsstudio.com',
            isAccessible: ({ currentAdmin }) => currentAdmin && currentAdmin.email === 'passant@slimnasticsstudio.com',
          }
        }
      },
    }
  ],
  rootPath: "/admin",
  branding: {
    companyName: "Slimnastics",
    softwareBrothers:false,
    logo:  "https://i.imgur.com/e0qXyb6.png" 
  },
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL ,
  password: process.env.ADMIN_PASSWORD,
};

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  cookieName: process.env.ADMIN_COOKIE_NAME ,
  cookiePassword:
    process.env.ADMIN_COOKIE_PASS ,
  authenticate: async (email, password) => {
    const admin = await Admin.findOne({email})
    if(admin && await argon2.verify(admin.encryptedPassword,password)){
      return admin.toJSON()
    }else if(email===ADMIN.email && password===ADMIN.password){
       return ADMIN
    }else{
    return null}
  },
});

module.exports = router;
