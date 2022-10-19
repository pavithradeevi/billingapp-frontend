import { useState,useRef } from "react";
import Notes from "./components/Notes";
import Table from "./components/Table";
import Footer from "./components/Footer";
import Dates from "./components/Dates";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice,setshowInvoice]=useState(false)
  const [name,setName]=useState("")
  const [address,setAddress]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [bankname,setBankname]=useState("")
  const [holname,setHolname]=useState("")
  const [accnumber,setAccnumber]=useState("")
  const [website,setWebsite]=useState("")
  const [cliname,setCliname]=useState("")
  const [cliaddress,setCliaddress]=useState("")
  const [innumber,setInnumber]=useState("")
  const [indate,setIndate]=useState("")
  const [duedate,setDuedate]=useState("")
  const [notes,setNotes]=useState("")
  const [description,setDescription]=useState("")
  const [quantity,setQuantity]=useState("")
  const [price,setPrice]=useState("")
  const [amount,setAmount]=useState("")
  const [list,setList]=useState([])
  const [total,setTotal]=useState(0)
  

  const componentRef=useRef()
  


  const handlePrint=()=>{
    window.print()

  }
  return (
    <>
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">

        
        {showInvoice ? (
          <>
          <ReactToPrint trigger={()=><button className="bg-blue-500 pl-5 text-white font-bold py-2
              px-8 rounded shadow border-2 border-blue-500 hover:bg-transperent
              hover:text-blue-500 transition-all duration-300">Print/Download</button>}
        content={()=>componentRef.current}/>



          <div ref={componentRef} className="p-5">
        <Header handlePrint={handlePrint}/>
        <MainDetails name={name} address={address}/>
        <ClientDetails clientName={cliname} clientAddress={cliaddress}/>
        <Dates invoiceNumber={innumber} invoiceDate={indate} dueDate={duedate}/>
        <Table description={description} quantity={quantity} 
              price={price} amount={amount} 
              list={list} setList={setList} 
              total={total} setTotal={setTotal}
        />
        <Notes Notes={notes}/>
        <Footer 
          name={name} 
          address={address} 
          website={website} 
          email={email} 
          phone={phone} 
          bankname={bankname} 
          accnumber={accnumber} 
          holname={holname}/>

       
        
        </div>

        <button onClick={()=> setshowInvoice(false)} className="mt-5 bg-blue-500 text-white font-bold py-2
              px-8 rounded shadow border-2 border-blue-500 hover:bg-transperent
              hover:text-blue-500 transition-all duration-300">Edit Information</button>
          </>
         ): (
         <>
           <div className="flex flex-col justify-center">


            <article className="md:grid grid-cols-2 gap-10">
            
            <div className="flex flex-col">
            <label htmlFor="name">Enter your Full Name</label>
              <input type="text" name="text" id="name" placeholder="Enter your Name" autoComplete="off" value={name} 
              onChange={(e)=> setName(e.target.value)}/>
            </div>

            <div className="flex flex-col">
            <label htmlFor="address">Enter your address</label>
              <input type="text" name="address" id="address" placeholder="Enter your address" autoComplete="off" value={address} 
              onChange={(e)=> setAddress(e.target.value)}/>
            </div>
           
            </article>



              <article className="md:grid grid-cols-3 gap-10">

              <div className="flex flex-col">
              <label htmlFor="email">Enter your Email</label>
              <input type="email" name="email" id="email" placeholder="Enter your emailid" autoComplete="off" value={email} 
              onChange={(e)=> setEmail(e.target.value)}/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="phone">Enter your phone number</label>
              <input type="text" name="text" id="phone" placeholder="Enter your phone number" autoComplete="off" value={phone} 
              onChange={(e)=> setPhone(e.target.value)}/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="website">Enter website</label>
              <input type="url" name="website" id="website" placeholder="Enter website" autoComplete="off" value={website} 
              onChange={(e)=> setWebsite(e.target.value)}/>
              </div>

              </article>

              <article className="md:grid grid-cols-3 gap-10">

                <div className="flex flex-col">

                <label htmlFor="bankname">Enter your BankName</label>
              <input type="text" name="bankname" id="bankname" placeholder="Enter your BankName" autoComplete="off" value={bankname} 
              onChange={(e)=> setBankname(e.target.value)}/>
                </div>


              <div className="flex flex-col">
              <label htmlFor="holname">Account Holder Name</label>
              <input type="text" name="bankname" id="bankname" placeholder="Enter your Account Holer Name" autoComplete="off" value={holname} 
              onChange={(e)=> setHolname(e.target.value)}/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="accnumber">Account number</label>
              <input type="text" name="text" id="accnumber" placeholder="Enter your account number" autoComplete="off" value={accnumber} 
              onChange={(e)=> setAccnumber(e.target.value)}/>
              </div>
              </article>

              

              <article className="md:grid grid-cols-2 gap-10 md:mt-20">
              <div className="flex flex-col">
              <label htmlFor="cliname">Enter your client Name</label>
              <input type="text" name="clientname" id="cliname" placeholder="Enter your client Name" autoComplete="off" value={cliname} 
              onChange={(e)=> setCliname(e.target.value)}/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="cliaddress">Enter your client address</label>
              <input type="text" name="clientaddress" id="cliaddress" placeholder="Enter your client address" autoComplete="off" value={cliaddress} 
              onChange={(e)=> setCliaddress(e.target.value)}/>
              </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
              <label htmlFor="innumber">Enter your Invoice number</label>
              <input type="text" name="invoice number" id="innumber" placeholder="Enter your invoice number" autoComplete="off" value={innumber} 
              onChange={(e)=> setInnumber(e.target.value)}/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="indate">Enter your Invoice date</label>
              <input type="date" name="invoice date" id="indate" placeholder="Enter your invoice date" autoComplete="off" value={indate} 
              onChange={(e)=> setIndate(e.target.value)}/>
              </div>

              <div className="flex flex-col">
              <label htmlFor="duedate">Enter your Due date</label>
              <input type="date" name="due date" id="duedate" placeholder="Enter your due date" autoComplete="off" value={duedate} 
              onChange={(e)=> setDuedate(e.target.value)}/>
              </div>
              </article>
              <article>
                <TableForm 
                description={description} setDescription={setDescription}
                quantity={quantity} setQuantity={setQuantity}
                price={price} setPrice={setPrice}
                amount={amount} setAmount={setAmount}
                list={list} setList={setList}
                total={total} setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes">Additional Notes</label>
              <textarea type="text" name="notes" id="notes" placeholder="Additional notes to the client" autoComplete="off" value={notes} 
              onChange={(e)=> setNotes(e.target.value)}/>

            
              <button onClick={()=> setshowInvoice(true)} className="bg-blue-500 text-white font-bold py-2
              px-8 rounded shadow border-2 border-blue-500 hover:bg-transperent
              hover:text-blue-500 transition-all duration-300">Preview Invoice</button>
           </div>
         </>
        )}
        
        
          


        
        
      </main>
    </>
  );
}

export default App;
