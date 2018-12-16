import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


import Firebase from 'firebase';
import 'firebase/firestore';


@Injectable()
export class DatabaseProvider {

  //private database = Firebase.firestore();
  //private storageRef: Firebase.storage.Reference = Firebase.storage().ref();


  private collectionPreliminar: string = 'Preliminar';
//   private collectionPreliminar: string = 'Products';
//   private collectionCategories: string = 'Categories';


  constructor() {
    //this.storageRef = Firebase.storage().ref();
  }

  
  getPreliminar(Preliminar?: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      if (Preliminar) {
        Firebase.firestore().collection(this.collectionPreliminar).where('flagNv1', '==', true).get()
          .then((querySnapPreliminar) => {
            let obj: any = [];
            querySnapPreliminar.forEach(doc => {
              console.log("doc flagNv1");
              console.dir(doc.data());
              obj.push({
                docId: doc.id,
                tutorial: doc.data().tutorial
              });
            });
            resolve(obj);
          })
          .catch((error) => {
            reject(error);
          });
      }
      else {
        Firebase.firestore().collection(this.collectionPreliminar).where('flagNv1', '==', true).get()
        .then((querySnapPreliminar) => {
            let obj: any = [];
            querySnapPreliminar.forEach(doc => {
              console.log("doc flagNv1");
              console.dir(doc.data());
              obj.push({
                docId: doc.id,
                tutorial: doc.data().tutorial
              });
            });
            resolve(obj);
          })
          .catch((error) => {
            reject(error);
          });
      }

    });

  }
  
}