import React from "react";
import AdSearchContextProvider from "../../context/AdSearchContext";
import Header from "./Header";
import PublishedAdsContainer from "../ads/PublishedAdsContainer";
import SearchBar from "./SearchBar";
import AdDisplayContextProvider from "../../context/AdDisplayContext";

const MainPage = () => {


        return (
                <div id='main-page'>
                        <Header />
                        <AdDisplayContextProvider>
                                <AdSearchContextProvider>

                                        <SearchBar />
                                        <PublishedAdsContainer />

                                </AdSearchContextProvider>
                        </AdDisplayContextProvider>
                </div>
        );
};


export default MainPage;