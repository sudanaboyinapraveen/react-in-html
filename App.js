    // //we need to give three arguments to create element of tags
    // const heading = React.createElement('h1',{},"this from react");

    // // this for to create room and to get data form reactDom 
    // const root = ReactDOM.createRoot(document.getElementById('ooo'));

    // // at last we need render the code 

    // root.render(heading)


    const heading = React.createElement('h1',{id:"para"},'These is  how we need to learn react at starting');

    console.log(heading); // object

    const root = ReactDOM.createRoot(document.getElementById('ooo'));
    console.log(root); //object
    root.render(heading);


    const parent= React.createElement('div',{id:'parent'},[React.createElement('div',{id :' child'},[React.createElement('h1',{},"this how we write nested code "),React.createElement('h1',{},"this how we write nested code ")]),React.createElement('div',{id :' child'},[React.createElement('h1',{},"this how we write nested code "),React.createElement('h1',{},"this how we write nested code ")])]);
    const newroot= ReactDOM.createRoot(document.getElementById('root'))

    newroot.render(parent)
    

    const newparent= React.createElement('div',{id:'parents'},React.createElement('div',{id :' childs'},React.createElement('h1',{},"this how we write nested code chgffguytuyytdurd ")));
    const newroots= ReactDOM.createRoot(document.getElementById('new'));
 


    newroots.render(newparent)
    