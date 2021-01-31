import React from 'react';
export default function Aboutme (){
    return(
        <div className="block w-full">
            <div className='64 bg-gray-900 shadow-md rounded-md'>
                
                <div className=" flex-grow p-4">
                    <div className="font-bold pb-4  uppercase border-b-2 border-gray-50 text-md text-gray-100">A props de moi</div>
                    <div className="font-normal pt-2 text-sm text-left text-gray-100">
                        <p>
                            J'ai 29 ans, titulaire des diplomes de licence professionnel et de Technicien Superieur en Informatique de Gestion.
                            Un an d'experience en tant que TECHNICIEN EN INFORMATIQUE au sein de la societe ATOUT SERVICE MADAGASCAR.
                        </p>
                        <p>
                            Je suis pationne par la nouvelle technologie, le coding sur tout le metier de WEB et ELECTRONIQUE. J'aime aussi relevee le nouveau defi.
                        </p>
                    </div>
                </div>

            </div>
            {/* <div className='w-100 rounded-b-xl -mt-8'>
                <a className='font-semibold pt-2 pr-2 float-right text-right text-sm  text-gray-100'>
                    Plus de details
                </a>
            </div> */}
        </div>
    )
}