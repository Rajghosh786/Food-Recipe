// npm install react-router-dom
// navlink copy kia hai css time bachane ke liye

// import { createBrowserRouter } from "react-router-dom"



// navbar me link and navlink nai chalra import karne ke bawajudh (kyuki browserRouter app.js me import ke components ko wrap nai kia tha)
// onSubmit kaam nai kar raha onChange kar raha hai khali(kyuki onSubmit form me dalna hai and onChange input me)
// map karna hai to pehle api se data lo and wo data ko state me save karo and wo state ko map karo yaad rakhna hai ki map ke baad jo argument diya hai wo argument se log karke show karna hai
// random generate karna easy hai math.floor zarurui hai uske bina nai hoga (Math.floor(Math.random() * searchQuery.length))

//to use reactrouter
// 1. install react-router
// 2. wrap the app.js or wherever the component is being stacked with the browserrouter or createbrowserrouter
// 3. only after then import and use Link and Navlink in any component so no error
// 4. abhi ek layout.jsx banayenge jisme humko sirf yehi mention karna hai ki kaunsa component change nai hoga click pe isme outlet import karnege from "react-router-dom"; aur header and footer ko wrapper jaisa use karenge outlet pe
// 5.iske baad app.jsx me ya main.jsx jaha humko sahi lage waha hum hum router create karenge
// 6. dono tarike se routing karenge pehle createBrowserRouter import karenge same router dom se aayega
// yeh createBrowserRouter ek function hai isme andar ek array aur main layout ke andar children banake usme path and element dal denge, niche strictMode me hum routerProvider import karke waha daal denge const router ko props ki tarah yeh compulsion hai
// dusra tarike me humko Route and createRoutesFromElements dono import kar denge niche createBrowserRouter ke andar createRoutesFromElements banake usme Route daal denge isme ek main element banega aur uske andar sub elements rakhenge just like <div>, isme lekin sab opening tags me hi likhna hai and children ke liye self closing tag me hi likha hai,isme bhi niche strictMode me hum routerProvider import karke waha daal denge const router ko props ki tarah yeh compulsion hai
// ohk iske baad bhi apne ko jaha bhi element rakha hai suppose about,login, register yeh sab ko navlink me wrap karna hai usme to="" dalna hai react router ke sath ek isActive method aata hai by default wo hum className me as a callback ki tarah use karsakte, taki user ko pata chale ki kaunse page me hai wo is active true false chala denge

// now abhi contextApi banana hai
// 1. ek Context folder bana denge usme ek UserContext.js bana denge yeh component nai hai isliye js file hai usme import karenge react ya createContext ko ek variable userContext me store kar lenge obviously isko direct bhi kar sakte hai lekin ek hi jagha save karke usko variable jaisa use karenge global jaisa ban jayega
// 2. userContextProvider.jsx bana lenge kyuki userContext ek provider hi hai yeh provider ek wrapper jaisa treat karte hai is provider me wrap kiye hue sare component ko global user ka access mil jata hai, to yeh userContextProvider.jsx ko wrapper component banana hai to component to banana padega
// 3. userContextProvider.jsx me ek callback function bana diya hai isme parameter me {children} use kia and yeh children outlet jaisa hi kaam karta hai ki header waisa hi rakho footer as it is hi rakho and baki display karado waisa hi {children} bhi karta hai ki values ko as it is pass karwa do children ki jagha hum kuch bhi use kar sakte hai children bas common naam hai, uske andar hum return me UserContext.Provider le lenge yeh wrapper hogaya usme {children} daal denge aur usme value ko props jaisa state ko pass kar denge jitna hai sab de denge abhi store ban gaya hai lekin store ka access sabko dena hai
// 4. yehi UserContextProvider ko humn main.jsx me RouterProvider ke upar wrap kar diya hai taki uske andar jiske jitne bhi hai sabko mile access
// 5. abhi setup hogaya hai abhi bas ek file se context bhejna h dusre se lena hai uske liye pehle UserContextProvider.jsx me dynamicId and setDynamicId pass kar denge aur value me pass kar denge taki pata chale kaunsa pass karna hai  
// 6. Home.jsx me import userContext from js file and const {setDynamicId} = useContext(UserContext) yaha se data lenge niche jsx me setDynamicId me pass kar diya hai
// 7. FullRecipe.jsx me same import karnege userContext from js file and dynamicId ko pass kia hai notice dono file me useContext(UserContext) pass kia hai and dono me curly brackets me value ko likha hai


// pending
// 1.create proper route by using createBrowserRouter