App = {
    loading: false,
    contracts: {},
  
     load: async () => {
      console.log("load");
         await App.loadWeb3()
         await App.loadAccount()
         await App.loadContract()
         await App.render() 
      //   if(window.location.hash === '#load-stuff'){
        // await  App.profile(); }
         if(window.location.hash.includes("name")){
          await  App.searchUser(); }
         if(window.location.hash === '#load'){
          await  App.signup();}
     },
  
  loadWeb3: async() => {
    console.log("loadweb3");
      if (window.ethereum) {
          console.log("Metamask Detected");
          window.web3 = new Web3(window.ethereum);
          try {
            res = await ethereum.enable();
          } catch (error) {
            alert("Permission Denied, Metamask Not connected!");
          }
        }
        
        else {
          alert(
            "Non-Ethereum browser detected. You should consider trying MetaMask!"
          );
        }
  },
  
  loadAccount: async () => {
    console.log("loadacc");
      setInterval(()=>{
          App.account = web3.currentProvider.selectedAddress;
         console.log(App.account)
      }, 10000);
  
      //set ownerAddress class to App.account 
      App.account = web3.currentProvider.selectedAddress;
      console.log(App.account+"HI")
      $("#account").text(App.account);  
    },
  
    loadContract: async () => {
      console.log("loadcont");
        let abi = [
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_content",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_hashtag",
                "type": "string"
              }
            ],
            "name": "addNewDweet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "deleteDweet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "content",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "string",
                "name": "hashtag",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "name": "NewDweetAdd",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "string",
                "name": "userName",
                "type": "string"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "pkey",
                "type": "address"
              }
            ],
            "name": "NewUserAdd",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              }
            ],
            "name": "deleted",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "downvoter",
                "type": "address"
              }
            ],
            "name": "downvoted",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "downvoteDweet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "followers",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "following",
                "type": "uint256"
              }
            ],
            "name": "followed",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "followUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_firstName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_lastName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_userName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_bio",
                "type": "string"
              }
            ],
            "name": "registerNewUser",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "reportDweet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "reporter",
                "type": "address"
              }
            ],
            "name": "reported",
            "type": "event"
          },
          {
            "anonymous": false,
            "inputs": [
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "address",
                "name": "upvoter",
                "type": "address"
              }
            ],
            "name": "upvoted",
            "type": "event"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              }
            ],
            "name": "upvoteDweet",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "accountCheck",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "addressToId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "dweet_count",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "name": "dweetCountAuthor",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "dweets",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "content",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "author",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "timestamp",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "upvotes",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "reports",
                "type": "uint256"
              },
              {
                "internalType": "string",
                "name": "hashtag",
                "type": "string"
              },
              {
                "internalType": "bool",
                "name": "deleted",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "dweetToAuthor",
            "outputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              }
            ],
            "name": "getReportsList",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "user",
                "type": "address"
              }
            ],
            "name": "getUpvotesList",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "ids",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "idToUsername",
            "outputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "reportsList",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "_userName",
                "type": "string"
              }
            ],
            "name": "search",
            "outputs": [
              {
                "internalType": "string",
                "name": "_firstname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "_lastName",
                "type": "string"
              },
              {
                "internalType": "address",
                "name": "pkey",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "_bio",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "followers",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "following",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "upvotesList",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [],
            "name": "user_count",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "name": "userNameCheck",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "string",
                "name": "",
                "type": "string"
              }
            ],
            "name": "userNameToId",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "name": "users",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "pkey",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "firstname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "lastname",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "userName",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "bio",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "following",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "followers",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          }
        ];
        let address = '0x4abFb8Ce551D4fC292CF2ebF78Fd98ef0a46520e';
        App.dwitterManage = new web3.eth.Contract(abi, address);
        console.log(App.dwitterManage);
    },
  
    render: async () => {
      console.log("loadren");
      // Prevent double render
      if (App.loading) {
        return;
      }
      // Render Account
      App.account = web3.currentProvider.selectedAddress;
      $("#account").html(App.account);  
  
      const bool= await App.dwitterManage.methods.accountCheck(App.account).call();
      if(bool == false){
           window.location.href = "signup.html#load";
      } 
   // Render Account
   App.account = web3.currentProvider.selectedAddress;
      const id = await App.dwitterManage.methods.addressToId(App.account).call();
      const userName = await App.dwitterManage.methods.idToUsername(id).call();
      console.log(userName)
      const userCount = await App.dwitterManage.methods.user_count().call();
      console.log(`User Count : ${userCount}`)
      const user = await App.dwitterManage.methods.users(id).call();
      const bio = user[5];
      $(".ownerName").text(userName);
      $("#bio").text(bio);
      await App.profile();
      // Render Tasks
      await App.renderTasks();
    },
  
    renderTasks: async() => {
      const dweetCount = await App.dwitterManage.methods.dweet_count().call();
      console.log(`Dweet Count : ${dweetCount}`);
      let upvotes; let reports;
     
      const $postTemplate = $(".dweetpost");
     for(let i= dweetCount-1; i>=0; i--){
        const dweet = await App.dwitterManage.methods.dweets(i).call();
      //  console.log(dweet);
        if(dweet[7] == false) {
           const times = dweet[3];
           const d = new Date(0);
           d.setUTCSeconds(times);
           var datestring = `${d.getDate()}-${(d.getMonth()+1)}-${d.getFullYear()} 
                                  ${d.getHours()}:${d.getMinutes()} IST`;
           const id = dweet[0];
           const content = dweet[1];
           upvotes = dweet[4]; 
           reports = dweet[5];
           const hashtag = dweet[6];
           const authorAddress= await App.dwitterManage.methods.dweetToAuthor(i).call();
           const authorId= await App.dwitterManage.methods.addressToId(authorAddress).call();
           const userName= await App.dwitterManage.methods.idToUsername(authorId).call();
     
       
           const $newpostTemplate = $postTemplate.clone();   
           $newpostTemplate.find(".dweetcontent").text(content);
           $newpostTemplate.find(".userName").html(userName);
           $newpostTemplate.find(".hashtags").html(hashtag);
           $newpostTemplate.find(".time").html(datestring);
           $newpostTemplate.find(".upvotes").html(upvotes);
           $newpostTemplate.find(".upvotesChange").html(upvotes);
           $newpostTemplate.find(".reports").html(reports);
           $("#post").append($newpostTemplate); 
      
           $newpostTemplate
           .find(".upvoteButton")
           .prop("id", id+"a")
           .on("click",function(){ App.upvoteDweet(id); }); 
          
           $newpostTemplate
           .find(".downvoteButton")
           .prop("id", id+"b")
           .on("click", function(){ App.downvoteDweet(id); });
   
           $newpostTemplate
           .find(".reportButton")
           .prop("id", id+"c")
           .prop("style", "visibility:visible")
           .on("click", function(){ App.reportDweet(id); }); 
         
           $newpostTemplate
           .find(".reports")
           .prop("id", id+"f"); 
   
           $newpostTemplate
           .find(".reported")
           .prop("id", id+"g");
  
         const temp = await App.dwitterManage.methods.getUpvotesList(App.account).call()
         if(temp.includes(id)){
          $newpostTemplate
          .find(".downvoteButton")
          .prop("style", "visibility:visible")
          $newpostTemplate
          .find(".upvoteButton")
          .prop("style", "display:none")
         }
         else{
          $newpostTemplate
          .find(".upvoteButton")
          .prop("style", "visibility:visible")
          $newpostTemplate
          .find(".downvoteButton")
          .prop("style", "display:none")
         }
  
         const temp1 = await App.dwitterManage.methods.getReportsList(App.account).call()
         if(temp1.includes(id)){
               $(`#${id}c`).prop("disabled", true);
               $(`#${id}c`).prop("style", "background: #4e5050")
           }
  
          $newpostTemplate.show();
        }}
       
        await App.dweetsByUser();
  },
  
  addNewDweet: async () => {
    const content = $("#dweet").val();
    let hashtag= $("#hashtag").val();
    if(content != ""){
      if(!hashtag.startsWith("#")) {hashtag = "#" + hashtag}
      var rc = await App.dwitterManage.methods
              .addNewDweet(content,hashtag)
              .send({ from: web3.currentProvider.selectedAddress });
    //  console.log(rc);
      window.location.reload(); }
  },
  
  upvoteDweet: async (id) => { 
    await App.dwitterManage.methods
        .upvoteDweet(id)
        .send({ from: web3.currentProvider.selectedAddress });  
   
     var old = $(`#${id}d`).text()
     var curr = parseInt(old)+1;
     $(`#${id}d`).hide()
     $(`#${id}a`).hide()
     $(`#${id}b`).show()
     $(`#${id}e`).text(curr)
     $(`#${id}e`).show()
     window.location.reload();
  },
  
  downvoteDweet: async (id) => { 
    await App.dwitterManage.methods
      .downvoteDweet(id)
      .send({ from: web3.currentProvider.selectedAddress }); 
  
    var old = $(`#${id}e`).text()
    var curr = parseInt(old)-1;
    $(`#${id}b`).hide()
    $(`#${id}e`).hide()
    $(`#${id}a`).show()
    $(`#${id}d`).text(curr)
    $(`#${id}d`).show()
    window.location.reload();
  },
  
  reportDweet: async (id) => { 
    await App.dwitterManage.methods
       .reportDweet(id)
       .send({ from: web3.currentProvider.selectedAddress });  
    var old = $(`#${id}f`).text()
    var curr = parseInt(old)+1;
    $(`#${id}f`).text(curr)
    $(`#${id}c`).prop("style", "background: #4e5050")
    $(`#${id}c`).prop("disabled", true);
  },
  
  deleteDweet: async (id) => { 
    await App.dwitterManage.methods
       .deleteDweet(id)
       .send({ from: web3.currentProvider.selectedAddress });  
    window.location.reload()
  },
  
  
  searchUser: async () => { 
    const userName = $('#search').val();

    //window.location.href = `index.html?name11=${userName}#name`;
    console.log("Profile11")

     const bool1 = await App.dwitterManage.methods.userNameCheck(userName).call();
     const id11 = await App.dwitterManage.methods.userNameToId(userName).call();
     console.log("one"+id11)
    if(bool1 == true){
        var rc = await App.dwitterManage.methods
                       .search(userName).call();
      //  $("#account").text(rc[2]); 
        $(".name").text(`${rc[0]} ${rc[1]}`)
        $(".sub-name").text(`@${userName}`)
        $(".bio").text(rc[3]);
        const pkey = rc[2];
        console.log("aa"+pkey)
        $("#address11").text(pkey)
        const dweetcount = await App.dwitterManage.methods.dweetCountAuthor(pkey).call();
        $("#dweets").text(dweetcount)
        $("#following").text(`${rc[5]}`)
        $("#followers").text(`${rc[4]}`)

        const temp = await App.dwitterManage.methods.getFollowingList(App.account).call()
        console.log("two"+id11)
        if(temp.includes(id11)){
         $(".profileid1")
         .prop("style", "visibility:visible")
         $(".profileid1").on("click", function(){ App.unfollowUser1(id11); });
         $("profileid")
         .prop("style", "display:none")
        }
        else{
         $(".profileid")
         .prop("style", "visibility:visible")
         $(".profileid").on("click", function(){ App.followUser1(id11); }); 
         $("profileid1")
         .prop("style", "display:none")
        }
 
        /*
        $(".profileid").prop("id", id11 )
        $(".profileid").prop("style", "visibility:visible" )
        console.log("id11="+id11)
        $(".profileid").on("click", function(){ App.followUser1(id11); }); 
        $(".profileid1").on("click", function(){ App.unfollowUser1(id11); });  */
      }
    else{alert("Invalid username !")} 
   
   
},
  
  
  followUser1: async(id) => { //get the id
   //await App.dwitterManage.methods
    //.followUser(id)
    //.send({ from: web3.currentProvider.selectedAddress });  
    //Replace follow button by unfollow button

    $(".profileid").hide()
    $(".profileid1").prop("style", "visibility:visible")
    //Increase count of followers and following in frontend
  },

  unfollowUser1: async(id) => { //get the id
    //await App.dwitterManage.methods
     //.followUser(id)
     //.send({ from: web3.currentProvider.selectedAddress });  
     //Replace follow button by unfollow button
 
     $(".profileid1").hide()
     $(".profileid").prop("style", "visibility:visible")
     //Increase count of followers and following in frontend
   },
  
  dweetsByUser : async() => {
    const $postTemplate = $(".dweetbody1");
    const dweetCount = await App.dwitterManage.methods.dweet_count().call();
    for(let i = dweetCount-1; i>=0; i--){
  
        App.account = web3.currentProvider.selectedAddress;
        const dweet = await App.dwitterManage.methods.dweets(i).call();  
        if(dweet[7] == false){
             const auth = dweet[2];
             var author = auth.toLowerCase();
             if(author == App.account){
                  let timestamp = dweet[3];
                  const d = new Date(0);
                  d.setUTCSeconds(timestamp);
                  var datestring = `${d.getDate()}-${(d.getMonth()+1)}-${d.getFullYear()} 
                       ${d.getHours()}:${d.getMinutes()} IST`;
                  const content = dweet[1];
                  const hashtag = dweet[6];
  
                 const $newpostTemplate = $postTemplate.clone();
                 $newpostTemplate.find(".dweetcontent1").html(content);
                 $newpostTemplate.find(".hashtags1").html(hashtag);
                 $newpostTemplate.find(".time1").html(datestring);
  
                 $newpostTemplate
                   .find(".deleteButton")
                   .prop("id", i)
                   .prop("style", "visibility:visible")
                   .on("click", function() {App.deleteDweet(i);}); 
       
                 $("#post1").append($newpostTemplate);
                 $newpostTemplate.show(); 
               }
            }}
  },

  profile : async() => { 
 //  window.location.href = "index.html#load-stuff";
      console.log("Profile")
      App.account = web3.currentProvider.selectedAddress;
      const id = await App.dwitterManage.methods.addressToId(App.account).call();
      const userName = await App.dwitterManage.methods.idToUsername(id).call();
      const user = await App.dwitterManage.methods.users(id).call();
      $(".name").text(`${user[2]} ${user[3]}`)
      $(".sub-name").text(`@${userName}`)
      $(".bio").text(`${user[5]}`)
      const dweetcount = await App.dwitterManage.methods.dweetCountAuthor(App.account).call();
      $("#address11").text(App.account)
  
      $("#dweets").text(dweetcount)
      $("#following").text(`${user[6]}`)
      $("#followers").text(`${user[7]}`)
    //  $(".profileid").prop("id", "visibility:visible")
     // $(".profileid").prop("id", id )
      //console.log("id11="+id)
      //$(".profileid").on("click", function(){ App.followUser1(id); });
  },

  signin: async() => {
    const uname = $(".uname").val();
    const bool1= await App.dwitterManage.methods.userNameCheck(uname).call();
  if(bool1 == true)
       alert("Username already taken. Try something else ");
  else {
    const fname = $(".fname").val();
    const lname = $(".lname").val();
    const bio = $(".bio").val();
    console.log(fname);
    await App.dwitterManage.methods.registerNewUser(fname,lname,uname,bio).send({ from: web3.currentProvider.selectedAddress })
     window.location.href = "front.html"
   }
 },

  signup: async() => {
    console.log("Cosnole");
    $("#register").on('click', function () { App.signin()});
  },
  };


  $(() => {
    $(window).load(() => {
      App.load();
    });
  });

  
