import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './assets/components/header/Header.jsx'
import Layout from './assets/Layout.jsx'
import ProfilePage from './assets/pages/ProfilePage.jsx'
import MessagePage from './assets/pages/MessagePage.jsx'
import Posts from './assets/components/other/profile/Posts.jsx'
import About from './assets/components/other/profile/About.jsx'
import Photos from './assets/components/other/profile/Photos.jsx'
import Videos from './assets/components/other/profile/Videos.jsx'
import Friends from './assets/components/other/profile/Friends.jsx'
import MainPage from './assets/pages/MainPage.jsx'
import Footer from './assets/components/footer/Footer.jsx'
import FriendsPage from './assets/pages/FriendsPage.jsx'
import Overview from './assets/components/other/about/Overview.jsx'
import Work from './assets/components/other/about/Work.jsx'
import Education from './assets/components/other/about/Education.jsx'
import Address from './assets/components/other/about/Address.jsx'
import BasicInfo from './assets/components/other/about/BasicInfo.jsx'
import NewsFeed from './assets/components/other/NewsFeed.jsx'
import SettingsPage from './assets/pages/SettingsPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<MainPage />} />
      <Route path='profile' element={<ProfilePage />} >
        <Route path='' element={<Footer />} />
        <Route path='posts' element={<Posts />} />
        <Route path='about' element={<About />} >
          <Route path='overview' element={<Overview />} />
          <Route path='work' element={<Work />} />
          <Route path='education' element={<Education />} />
          <Route path='address' element={<Address />} />
          <Route path='basic_info' element={<BasicInfo />} />


        </Route>
        <Route path='friends' element={<Friends />} />
        <Route path='photos' element={<Photos />} />
        <Route path='videos' element={<Videos />} />
      </Route>
      <Route path='settings' element={<SettingsPage />} />

      <Route path='messages' element={<MessagePage />} />
      <Route path='friends' element={<FriendsPage />} />
      <Route path='saved' element={<MessagePage />} />
      <Route path='groups' element={<MessagePage />} />

      <Route path='feeds' element={<NewsFeed />} />
      <Route path='events' element={<NewsFeed />} />
      <Route path='request' element={<MessagePage />} />





    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} >
      <App />
    </RouterProvider>
  </StrictMode>,
)
