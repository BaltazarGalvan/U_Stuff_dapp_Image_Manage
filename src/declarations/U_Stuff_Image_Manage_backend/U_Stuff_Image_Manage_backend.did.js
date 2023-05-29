export const idlFactory = ({ IDL }) => {
  const ImgProfile = IDL.Record({
    'source' : IDL.Text,
    'imgClass' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
    'buttonAriaCurrent' : IDL.Text,
    'buttonClass' : IDL.Text,
    'altText' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const ImgCollection = IDL.Service({
    'addImg' : IDL.Func([ImgProfile], [Result], []),
    'allImages' : IDL.Func([], [IDL.Vec(ImgProfile)], ['query']),
    'deleteOne' : IDL.Func([IDL.Nat], [Result], []),
    'modImg' : IDL.Func([IDL.Nat, ImgProfile], [Result], []),
    'removeAll' : IDL.Func([], [Result], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
  return ImgCollection;
};
export const init = ({ IDL }) => { return []; };
