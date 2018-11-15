// document.body.onload = addElement;

// function addElement () { 
   
  
  var span = document.createElement("span"); 
  var head1 = document.createElement("h1"); 
  var head3 = document.createElement("p"); 
  var head31 = document.createElement("p"); 
  var head32 = document.createElement("p"); 
  var head33 = document.createElement("p"); 
  var head34 = document.createElement("p"); 
  var head35 = document.createElement("p"); 
  var listItem1 = document.createElement("h3"); 
  var listItem2 = document.createElement("h3"); 
  var listItem3 = document.createElement("h3"); 
  var listItem4 = document.createElement("h3"); 
  var listItem5 = document.createElement("h3"); 
   
 

  var newContent = document.createTextNode("Bloomberg");
  var newContent12 = document.createTextNode("Opinion"); 
  var newContent1 = document.createTextNode("Tyler Cowen"); 
  var newContent2 = document.createTextNode("The Carbon Tax is Dead, Long Live the Carbon Tax"); 
  var newContent3 = document.createTextNode("Liam Denning"); 
  var newContent4 = document.createTextNode("Tesla's New Chair Is Part of the Furniture"); 
  var newContent5 = document.createTextNode("Leonid Bershidsky"); 
  var newContent6 = document.createTextNode("Foldable Phones Are a Chance For a Tired Industry"); 
  var newContent7 = document.createTextNode("Noah Smith"); 
  var newContent8 = document.createTextNode("Democrats Should Lay Out a Grand Vision For America"); 
  var newContent9 = document.createTextNode("The Editors"); 
  var newContent10 = document.createTextNode("A Wave Election for Health-Care Reform"); 
  var newContent11 = document.createTextNode("READ MORE FROM OPINION"); 
  
  head1.appendChild(newContent);  
  head31.appendChild(newContent1);
  listItem1.appendChild(newContent2);  
  head31.appendChild(newContent3);
  listItem2.appendChild(newContent4);  
  head33.appendChild(newContent5);
  listItem3.appendChild(newContent6);  
  head34.appendChild(newContent7);
  listItem4.appendChild(newContent8);  
  head35.appendChild(newContent9);
  listItem5.appendChild(newContent10);  
  head35.appendChild(newContent11);
  span.appendChild(newContent12);
    
  articleContainer.appendChild(head1), articleContainer.appendChild(span);
  ; 
  articleContainer.appendChild(head31);
  articleContainer.appendChild(listItem1);
  articleContainer.appendChild(listItem2); 
  articleContainer.appendChild(head32);
  articleContainer.appendChild(listItem3); 
  articleContainer.appendChild(head33);
  articleContainer.appendChild(listItem4); 
  articleContainer.appendChild(head34);
  articleContainer.appendChild(listItem5); 
  articleContainer.appendChild(head35);
   
  var currentDiv = document.getElementById("div1"); 
  document.body.appendChild(articleContainer); 
