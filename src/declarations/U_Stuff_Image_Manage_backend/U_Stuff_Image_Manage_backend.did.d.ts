import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface ImgCollection {
  'addImg' : ActorMethod<[ImgProfile], Result>,
  'allImages' : ActorMethod<[], Array<ImgProfile>>,
  'deleteOne' : ActorMethod<[bigint], Result>,
  'modImg' : ActorMethod<[bigint, ImgProfile], Result>,
  'removeAll' : ActorMethod<[], Result>,
  'whoami' : ActorMethod<[], Principal>,
}
export interface ImgProfile {
  'source' : string,
  'imgClass' : string,
  'name' : string,
  'description' : string,
  'buttonAriaCurrent' : string,
  'buttonClass' : string,
  'altText' : string,
}
export type Result = { 'ok' : null } |
  { 'err' : string };
export interface _SERVICE extends ImgCollection {}
