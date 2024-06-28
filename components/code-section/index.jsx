import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {AndroidCode, AngularCode, JavaScriptCode, SwiftCode} from "./code";
import { CodeSVG } from "../svg";
import codeImage from '@/app/assets/images/code.png'

export const CodeSection = () => {
  return (
    <section className="relative z-10 flex w-full h-full justify-center my-[120px] bg-[#22262C]">
        {/* <div className="hidden mt-[120px] items-center justify-center bg-[#292D32] max-w-[980px] mx-auto rounded-[60px] gradient-border">
          <Tabs defaultValue="javascript" className="w-full max-w-[980px] mx-auto">
            <TabsList>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="swift">iOS (Swift)</TabsTrigger>
              <TabsTrigger value="android">Android (Kotlin)</TabsTrigger>
              <TabsTrigger value="angular">Angular</TabsTrigger>
            </TabsList>
            <TabsContent value="javascript">
              <div className="h-[600px]">
                <JavaScriptCode />
              </div>
            </TabsContent>
            <TabsContent value="swift">
              <SwiftCode />
            </TabsContent>
            <TabsContent value="android">
              <AndroidCode />
            </TabsContent>
            <TabsContent value="angular">
              <AngularCode />
            </TabsContent>
          </Tabs>
        </div>    */}
        {/* <div className="pt-[120px] mt-[120px] flex justify-center w-[calc(100%_-_32px)] max-w-[1280px] mx-auto">
          <CodeSVG  className="pt-[120px] mt-[120px] flex justify-center w-[calc(100%_-_32px)] max-w-[1280px] mx-auto" />
        </div>    */}
          <Image src={codeImage} width={1280} height={600} alt="4 tabs code interface of AuthOne"
            className="mt-40 pt-[120px] z-10 relative block"
          />
        <div className="mt-[120px] flex justify-center w-[calc(100%_-_32px)] max-w-[1280px] mx-auto">
        </div>   
    </section>
  );
};
