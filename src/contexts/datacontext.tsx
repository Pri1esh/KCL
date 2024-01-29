// DataContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPagedata } from '../services/api/dataService';



// Create the context
const DataContext = createContext<any | undefined>(undefined);

// Define the props for the DataProvider
interface DataProviderProps {
  children: ReactNode;
}


// Create the DataProvider component
const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [headerData, setheaderData] = useState<any | null>(null);
  const [footerData, setfooterData] = useState<any | null>(null);
  const [currentPage, setcurrentPage] = useState<any | null>(null);

  const [homeMainData, sethomeMainData] = useState<any | null>(null);
  const [MedianewsData, setMedianewsData] = useState<any | null>(null);
  const [PressReleaseData, setPressReleaseData] = useState<any | null>(null);
  const [ContactUsData, setContactUsData] = useState<any | null>(null);
  const [CareerData, setCareerData] = useState<any | null>(null);





  
  const getHomeData = async () => {
    
    console.log("Home")
    try {
      const content = await getPagedata("/");
      setheaderData(content.route.placeholders['headless-header'][0]);
      sethomeMainData(content.route.placeholders['headless-main']);
      setfooterData(content.route.placeholders['headless-footer'][0]);
    } catch (error) {
      // Handle error
    }
    const currentPage = window.location.pathname.split('/').pop();
    if(currentPage != "MediaNews"){getMedianewsData();}
    if(currentPage != "PressReleaseData"){getPressReleaseData();}
    if(currentPage != "ContactUs"){getContactUsData();}
  };
  const getMedianewsData = async () => {
    console.log("MediaNews")
    try {
      const content = await getPagedata("/Medianews");
      setMedianewsData(content.route.placeholders['headless-main']);
    } catch (error) {
      // Handle error
    }
  };
  const getPressReleaseData = async () => {
    console.log("PressRelease")
    try {
      const content = await getPagedata("/PressRelease");
      setPressReleaseData(content.route.placeholders['headless-main']);
    } catch (error) {
      // Handle error
    }
  };
  const getContactUsData = async () => {
    console.log('ContactUs')
    try {
      const content = await getPagedata("/ContactUs");
      setContactUsData(content.route.placeholders['headless-main']);
    } catch (error) {
      alert('Error')
    }
  };
  const getCareerData = async () => {
    console.log('ContactUs')
    try {
      const content = await getPagedata("/Career");
      setCareerData(content.route.placeholders['headless-main']);
    } catch (error) {
      alert('Error')
    }
  };


  const contextValue: any = {
    getHomeData,getMedianewsData,getPressReleaseData,getContactUsData,getCareerData,
    
    headerData,homeMainData,footerData,
    MedianewsData,
    PressReleaseData,
    ContactUsData,
    CareerData,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};



export { DataContext,DataProvider };
