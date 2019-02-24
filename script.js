var message=[];
  var database = firebase.firestore(app);

  database.collection("quotes").get()
  .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          doc.id, " => ", doc.data();
            message.push(doc.data());
        });
        pickMessage();
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

  function pickMessage(){
    var word= "";
    var i = 0;
    var pastNum = [];
    while(i<3){
      var tempNum = Math.floor(Math.random()*message.length);
  if( pastNum.find(function(element) {
  return element == tempNum;

})!=null){

}
else{
  $("#goodQuote"+word).text(message[tempNum].quote);
  pastNum.push(tempNum);


  word++;
  i++;
}

    }


  }
