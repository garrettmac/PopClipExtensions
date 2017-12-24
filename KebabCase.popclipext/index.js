try{
  console.log(process.env.POPCLIP_TEXT.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase())
}catch(e){
  console.log(e)
}
