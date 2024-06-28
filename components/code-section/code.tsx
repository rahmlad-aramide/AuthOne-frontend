import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";


export function JavaScriptCode (){
    const codeString = `
    const login = async () => {       
      await auth0. loginWithRedirect( {            
      redirect_uri: window.location.origin     
   });};
    `;
    return (
      <SyntaxHighlighter language="javascript" style={nightOwl} className="!bg-[#292D32] relative z-10">
        {codeString}
      </SyntaxHighlighter>
    );
  };

export function SwiftCode (){
    const codeString = `
    const login = async () => {       
      await auth0. loginWithRedirect( {            
      redirect_uri: window.location.origin     
   });};
    `;
    return (
      <SyntaxHighlighter language="swift" style={nightOwl}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

export function AndroidCode (){
    const codeString = `
    const login = async () => {       
      await auth0. loginWithRedirect( {            
      redirect_uri: window.location.origin     
   });};
    `;
    return (
      <SyntaxHighlighter language="kotlin" style={nightOwl}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

export function AngularCode (){
    const codeString = `
    const login = async () => {       
      await auth0. loginWithRedirect( {            
      redirect_uri: window.location.origin     
   });};
    `;
    return (
      <SyntaxHighlighter language="angular" style={nightOwl} className="bg-[#292D32]">
        {codeString}
      </SyntaxHighlighter>
    );
  };