import react from 'react';
import { ethers } from 'ethers';
import "./token.css"

const Transfer1 = () => {
    const abi = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
            "name": "totalSupply",
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
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]

    let tempprovider = new ethers.providers.Web3Provider(window.ethereum);
    let tempsigner = tempprovider.getSigner();
    let tempcontract = new ethers.Contract("0xCC6b5C5E2B874F2eD5eb3c9afeabA8E8639954eD", abi, tempsigner);

    var proposelval = document.getElementById("sendaddress").value;
    var proposelval1 = document.getElementById("sendamount").value;
    var add = 100000000000000000;
    var amount = proposelval1 + add;  //* 1000000000000000000
    var castvote = tempcontract.transfer(proposelval, amount);
    castvote.then(function(){
        document.getElementById("sendaddress").value = "";
        document.getElementById("sendamount").value ="";
    })
  
}




function token() {
    return (
        < >
               <div className="maincard">
                <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white ">
                    <main className="mt-4 p-4">
                        <h1 className="text-xl font-semibold text-gray-700 text-center">
                            Send TOKEN payment
                        </h1>

                        <div className="">
                            <div className="my-3">
                                <input
                                    type="text"
                                    name="addr"
                                    id="sendaddress"
                                    className="input input-bordered block w-full focus:ring focus:outline-none"
                                    placeholder="Recipient Address"
                                />
                            </div>
                            <div className="my-3">
                                <input
                                    name="ether"
                                    type="text"
                                    id="sendamount"
                                    className="input input-bordered block w-full focus:ring focus:outline-none"
                                    placeholder="Amount in TOKEN"
                                />
                            </div>
                        </div>
                    </main>
                    <footer className="p-4">
                        <button
                            onClick={Transfer1}
                            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                        >
                           SEND NOW
                        </button>
                       
                    </footer>
                </div>
        
          </div>
        </>











        // <>
        // <input id='sendaddress'></input>
        // <br/>
        // <br/>
        // <input type='float' id='sendamount'></input>
        // <br/>
        // <br/>
        // <Button onClick={Transfer1}>Submit</Button>

        // </>
    )
}

export default token;