import React from "react";
import ApiTestTool from "../components/ApiTestTool";
//https://univcert.com/instruction7
const ApiTester = () => {
  const apiList = [
    "https://univcert.com/api/v1/status",
    "https://univcert.com/api/v1/clear",
    "https://univcert.com/api/v1/certifiedlist",
    "https://univcert.com/api/v1/check",
  ];

  return (
    <div>
      <h1>API 테스트 도구</h1>
      <ApiTestTool apiList={apiList} />
    </div>
  );
};

export default ApiTester;
