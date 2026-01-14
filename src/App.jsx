// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "./pages/MainPage.jsx";
// import PreviewPage from "./components/PreviewPage.jsx";
// import { Toaster } from "react-hot-toast";
// import Dashboard from "./pages/Dashboard.jsx";
// import Menubar from "./components/Menubar.jsx";
// import LandingPage from "./pages/LandingPage/LandingPage.jsx";
// import UserSyncHandler from "./components/UserSyncHandler.jsx";
// import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
//
// function App() {
//   return (
//     <Router>
//       <UserSyncHandler />
//       <Menubar />
//       <Toaster />
//
//       <Routes>
//         {/* Public Route */}
//         <Route path="/" element={<LandingPage />} />
//
//         {/* Protected Routes - only show if signed in */}
//         <Route
//           path="/dashboard"
//           element={
//             <>
//               <SignedIn>
//                 <Dashboard />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         />
//         <Route
//           path="/generate"
//           element={
//             <>
//               <SignedIn>
//                 <MainPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         />
//         <Route
//           path="/preview"
//           element={
//             <>
//               <SignedIn>
//                 <PreviewPage />
//               </SignedIn>
//               <SignedOut>
//                 <RedirectToSignIn />
//               </SignedOut>
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }
//
// export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import {
    RedirectToSignIn,
    SignedIn,
    SignedOut,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";

import MainPage from "./pages/MainPage.jsx";
import PreviewPage from "./components/PreviewPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Menubar from "./components/Menubar.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import UserSyncHandler from "./components/UserSyncHandler.jsx";

function App() {
    return (
        <Router>
            <UserSyncHandler />
            <Menubar />
            <Toaster />

            <Routes>
                {/* Public Route */}
                <Route path="/" element={<LandingPage />} />

                {/* Auth routes for Clerk */}
                <Route
                    path="/sign-in"
                    element={<SignIn routing="path" path="/sign-in" />}
                />
                <Route
                    path="/sign-up"
                    element={<SignUp routing="path" path="/sign-up" />}
                />

                {/* TEMP: dashboard without Clerk, just to test rendering */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Still protected */}
                <Route
                    path="/generate"
                    element={
                        <>
                            <SignedIn>
                                <MainPage />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />

                <Route
                    path="/preview"
                    element={
                        <>
                            <SignedIn>
                                <PreviewPage />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
