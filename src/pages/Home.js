import React from 'react'
import PageHeader from '../components/atoms/PageHeader'
import StatusCard from '../components/atoms/StatusCard'
import StatusCardDanger from '../components/atoms/StatusCardDanger'
import StatusCardWarning from '../components/atoms/StatusCardWarning'
import Footer from '../components/molecules/Footer'
import Header from '../components/molecules/Header'
import SideNAv from '../components/molecules/SideNAv'

function Home() {
    return (
        <div>
            <div className="flex gap-5">
                <div className=" hidden md:block">
                    <SideNAv/>

                </div>
                <div className="ml-0 md:ml-40 lg:ml-52 relative ">

                    <Header/>
                    <div>
                    <PageHeader title="Machine Status" />
                    <hr className="border-2 border-primary-0"/>
                    <div className="flex flex-wrap overflow-auto justify-center">

                    <StatusCard/>
                    <StatusCardDanger/>
                    <StatusCardWarning/>
                    <StatusCard/>
                    <StatusCard/>
                    <StatusCardWarning/>
                    <StatusCardWarning/>
                    <StatusCardDanger/>
                    <StatusCardDanger/>
                    <StatusCard/>
                    <StatusCard/>
                    <StatusCard/>


                    </div>


                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Home
