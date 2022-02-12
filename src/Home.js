import React, { useEffect, useState } from "react";
import { Button,Card } from "react-bootstrap";
import "./home.css";
import { ethers } from "ethers";
import Token from "./Token";

import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

function Home() {

    const [provider, setprovider] = useState(null);
    const [errormassege, seterrormassage] = useState(null);

    const [connectwallet, setconnectwalet] = useState('CONNECT WALLET');
    const [defaultAccount, setdefaultaccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);

    const [Provider,settprovider] = useState(null);
    const [signer,setsigner] = useState(null);
    const [contract,setcontract] = useState({data : null});

    const connect = () => {
        if (window.ethereum && defaultAccount == null) {
            setprovider(new ethers.providers.Web3Provider(window.ethereum));

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountchangehandler(result[0]);
                    
                    setconnectwalet('WALLET CONNECTED');
                })
                .catch(massage => {
                    seterrormassage(massage.massage);
                })
        }
        else if (!window.ethereum) {
            seterrormassage('NEED TO INSTALL METAMASK');
        }
    }

    const updatether = ()=>{
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
          setcontract(tempcontract);
          console.log(contract);

          settprovider(tempprovider);
          setsigner(tempsigner);
          setcontract(tempcontract);

          
    }

    const accountchangehandler =  (address) =>{
        setdefaultaccount(address);
        updatether();
         console.log(defaultAccount);
         
 }

 const updateBalance = async () => {
    let balanceBigN = await contract.balanceOf(defaultAccount);
    
    let tokenBalance = balanceBigN / Math.pow(10, 18);

    setUserBalance(toFixed(tokenBalance));	


}

function toFixed(x) {
    if (Math.abs(x) < 1.0) {
       var e = parseInt(x.toString().split('e-')[1]);
       if (e) {
          x *= Math.pow(10, e - 1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
       }
    } else {
       var e = parseInt(x.toString().split('+')[1]);
       if (e > 20) {
          e -= 20;
          x /= Math.pow(10, e);
          x += (new Array(e + 1)).join('0');
       }
    }
    return x;
 }

 useEffect(() => {
     if(contract!= null)
     {
        // updatether();
        updateBalance();
        console.log(contract);
     }
     
}, [contract]);
 

    return (
        <>
            <section className="fsection">

                <div className="f1section" >
                    
                    <h2>
                        THE BEST TOKEN IN CRYPTO
                    </h2>

                    <div className="f2section">
                        <h3>
                            The World Is Notinhg Without Blockchain
                            <br></br>
                            Be A part Of That.
                            <br></br>
                            <br></br>
                        </h3>

                        <Button variant="primary" size="lg" onClick={connect}>{connectwallet}</Button>

                    </div>
                </div>
                <div className="carddiv">
                    <div className="cardshow">
                        <Card className="cardstyle">
                            <Card.Body>
                                <Card.Title>ACCOUNT</Card.Title>
                                <br></br>
                                <Card.Text>
                                   {defaultAccount}
                                </Card.Text>
                                <Card.Title>TOKEN</Card.Title>
                                <br></br>
                                <Card.Text id = "balance">
                                    {userBalance}
                                </ Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;