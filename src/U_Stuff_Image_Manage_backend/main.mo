import Types "Types";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";
import Text "mo:base/Text";
import Int "mo:base/Int";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Bool "mo:base/Bool";
import Result "mo:base/Result";
import Debug "mo:base/Debug";


actor class ImgCollection() {

  type ImgProfile = Types.ImgCollectionType;

  stable var authorizedUsers :Text = "yciuc-hi5am-7ua4g-jozwr-bffeh-xze7i-4lvoe-sqamv-3njgb-b6thy-6ae";
  stable var imagesCollectionArray : [ImgProfile] = [];

  func authorizedPrincipalID(id: Principal): Bool{
      if (id==Principal.fromText(authorizedUsers)){true}else{false};
   };
  
  func imagesData(img : ImgProfile):  ImgProfile{
    let newImgage :ImgProfile = {
      name = img.name;
      description = img.description;
      imgClass = img.imgClass;
      source= img.source;
      altText= img.altText;
      buttonClass= img.buttonClass;
      buttonAriaCurrent = img.buttonAriaCurrent;
    };
    return newImgage;
  };

  public  shared query ({caller})  func whoami() : async Principal{
    return caller;
  };

  public shared ({caller}) func addImg(img : ImgProfile): async Result.Result<(),Text>{
    if(authorizedPrincipalID(caller)){
      let imagesCollectionBuffer = Buffer.fromArray <ImgProfile>(imagesCollectionArray);
      let newImgage :ImgProfile =  imagesData(img);

      imagesCollectionBuffer.add(newImgage);

      imagesCollectionArray := Buffer.toArray(imagesCollectionBuffer);
      return #ok ;
    }else{
      return #err("Not Authorize");
    };

  };

  public shared ({caller}) func modImg(index : Nat, img : ImgProfile): async Result.Result<(),Text>{
    if(authorizedPrincipalID(caller)){

      let imagesCollectionBuffer = Buffer.fromArray <ImgProfile>(imagesCollectionArray);
      let newImgage :ImgProfile =  imagesData(img);

      imagesCollectionBuffer.put(index, newImgage);
      imagesCollectionArray := Buffer.toArray(imagesCollectionBuffer);
     return #ok ;
    }else{
      return #err("Not Authorize");
    };
  };

  public shared ({caller}) func deleteOne(index :Nat): async Result.Result<(), Text>{
    if(authorizedPrincipalID(caller)){

      let imagesCollectionBuffer = Buffer.fromArray <ImgProfile>(imagesCollectionArray);
      ignore imagesCollectionBuffer.remove(index);
      imagesCollectionArray := Buffer.toArray(imagesCollectionBuffer);
     return #ok ;
    }else{
      return #err("Not Authorize");
    };
  };

  public shared ({caller}) func removeAll (): async Result.Result<(),Text>{
      if(authorizedPrincipalID(caller)){
          imagesCollectionArray:=[]; 
          return #ok ;
      }else{
          return #err("Not Authorize");
      };
  };

  public shared query func allImages(): async [ImgProfile]{ 
    return imagesCollectionArray;
  };

};

