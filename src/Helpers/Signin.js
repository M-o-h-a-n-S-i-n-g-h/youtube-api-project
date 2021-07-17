import * as credentials from "../credentials";

export const signIn = () => {
   const gapi = window.gapi;
   
   return new Promise((resolve, reject) => {
      gapi.load('client:auth2', () => {
         gapi.client.init({
            apiKey: credentials.API_KEY,
            clientId: credentials.CLIENT_ID,
            discoveryDocs: credentials.DISCOVERY_DOCS,
            scope: credentials.SCOPES
         });
         gapi.auth2.getAuthInstance().signIn()
           .then(res => {
              const authObject = {
                 user: res.Ys.getName(),
                 token: res.mc.access_token,
                 imgUrl: res.Ys.getImageUrl()
              }
              resolve(authObject);
           })
           .catch(err => {
              reject(err)
           })
      });
   })
}