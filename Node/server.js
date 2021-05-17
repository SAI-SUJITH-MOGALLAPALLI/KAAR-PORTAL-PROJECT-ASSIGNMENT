const express = require("express");

const request = require("request");

const parser = require("xml-js");

var cors = require('cors')

var app = express()

app.use(cors());

app.use(express.json());



app.post("/login", function (req, res) {
   uname = req.body.uname;
   pwd = req.body.pwd;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_CUST_LOGIN_SUJ>
          <!--You may enter the following 2 items in any order-->
          <!--Optional:-->
          <I_CUSTID>`+ uname + `</I_CUSTID>
          <!--Optional:-->
          <I_PASSWORD>`+ pwd + `</I_PASSWORD>
       </urn:ZSD_CUST_LOGIN_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_SOAP_TO_RFC_LOGIN&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})

app.post("/custprofiledetail", function (req, res) {
   uname = req.body.uname;

   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_CUST_PROFILE_DETAIL_SUJ>
          <I_CUSTID>`+ uname + `</I_CUSTID>
       </urn:ZSD_CUST_PROFILE_DETAIL_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_CUSTOMER_PROFILE&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.post("/custprofileedit", function (req, res) {
   uname = req.body.uname;

   fname = req.body.fname;

   lname = req.body.lname;

   street = req.body.street;

   city = req.body.city;

   state = req.body.state;

   pincode = req.body.pincode;

   country = req.body.country;

   mobile = req.body.mobile;

   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_CUST_PROFILE_EDIT_SUJ>
          <!--You may enter the following 9 items in any order-->
          <I_CITY>`+ city + `</I_CITY>
          <I_COUNTRY>`+ country + `</I_COUNTRY>
          <I_KUNNR>`+ uname + `</I_KUNNR>
          <I_NAME1>`+ fname + `</I_NAME1>
          <I_NAME2>`+ lname + `</I_NAME2>
          <I_PSTLZ>`+ pincode + `</I_PSTLZ>
          <I_STATE>`+ state + `</I_STATE>
          <I_STREET>`+ street + `</I_STREET>
          <I_TELF1>`+ mobile + `</I_TELF1>
       </urn:ZSD_CUST_PROFILE_EDIT_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_CUSTOMER_PROFILE_EDIT&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})

app.post("/masterdata", function (req, res) {
   city = req.body.city;
   country = req.body.country;
   curr = req.body.curr;
   custref = req.body.custref;
   distchannel = req.body.distchannel;
   div = req.body.div;
   fname = req.body.fname;
   lname = req.body.lname;
   lang = req.body.lang;
   phone = req.body.phone;
   salesorg = req.body.salesorg;
   street = req.body, street;
   postcode = req.body.postcode;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_MASTERDATA_SUJ>
          <!--You may enter the following 13 items in any order-->
          <I_CITY>`+ city + `</I_CITY>
          <I_COUNTRY>`+ country + `</I_COUNTRY>
          <I_CURR>`+ curr + `</I_CURR>
          <I_CUSTOMER_REF>`+ custref + `</I_CUSTOMER_REF>
          <I_DIST_CHANNEL>`+ distchannel + `</I_DIST_CHANNEL>
          <I_DIV>`+ div + `</I_DIV>
          <I_FIRSTNAME>`+ fname + `</I_FIRSTNAME>
          <I_LANGUAGE>`+ lang + `</I_LANGUAGE>
          <I_LASTNAME>`+ lname + `</I_LASTNAME>
          <I_PHONE>`+ phone + `</I_PHONE>
          <I_POSTCODE>`+ postcode + `</I_POSTCODE>
          <I_SALESORG>`+ salesorg + `</I_SALESORG>
          <I_STREET>`+ street + `</I_STREET>
       </urn:ZSD_MASTERDATA_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_CUST_MASTER_DATA&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.post("/getdeliverylist", function (req, res) {
   uname = req.body.uname;

   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_DELIVERY_GETLIST_SUJ>
          <!--You may enter the following 2 items in any order-->
          <I_CUSTID>7</I_CUSTID>
          <IT_DELIVERY_LIST>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <VBELN></VBELN>
                <!--Optional:-->
                <VKORG></VKORG>
                <!--Optional:-->
                <LFART></LFART>
                <!--Optional:-->
                <PSTYV></PSTYV>
                <!--Optional:-->
                <LFDAT></LFDAT>
                <!--Optional:-->
                <LFUHR></LFUHR>
                <!--Optional:-->
                <FKDAT></FKDAT>
                <!--Optional:-->
                <MATNR></MATNR>
                <!--Optional:-->
                <ARKTX></ARKTX>
                <!--Optional:-->
                <LFIMG></LFIMG>
                <!--Optional:-->
                <MEINS></MEINS>
                <!--Optional:-->
                <BTGEW></BTGEW>
                <!--Optional:-->
                <NTGEW></NTGEW>
                <!--Optional:-->
                <GEWEI></GEWEI>
                <!--Optional:-->
                <INCO2></INCO2>
                <!--Optional:-->
                <KUNNR></KUNNR>
                <!--Optional:-->
                <KUNAG></KUNAG>
                <!--Optional:-->
                <GSBER></GSBER>
                <!--Optional:-->
                <VKBUR></VKBUR>
                <!--Optional:-->
                <VKGRP></VKGRP>
                <!--Optional:-->
                <VTWEG></VTWEG>
                <!--Optional:-->
                <SPART></SPART>
             </item>
          </IT_DELIVERY_LIST>
       </urn:ZSD_DELIVERY_GETLIST_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_GET_DELIVERY_LIST&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.post("/getsalesorderdata", function (req, res) {
   uname = req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_SALESORDER_GETLIST_SUJ>
          <!--You may enter the following 9 items in any order-->
          <I_CUSTID>`+ uname + `</I_CUSTID>
          <!--Optional:-->
          <I_DOC_FROM_DATE></I_DOC_FROM_DATE>
          <!--Optional:-->
          <I_DOC_TO_DATE></I_DOC_TO_DATE>
          <!--Optional:-->
          <I_FLAG></I_FLAG>
          <!--Optional:-->
          <I_MATERIAL></I_MATERIAL>
          <!--Optional:-->
          <I_MATERIAL_EVG>
             <!--Optional:-->
             <MATERIAL_EXT></MATERIAL_EXT>
             <!--Optional:-->
             <MATERIAL_VERS></MATERIAL_VERS>
             <!--Optional:-->
             <MATERIAL_GUID></MATERIAL_GUID>
          </I_MATERIAL_EVG>
          <!--Optional:-->
          <I_PURCHASEORDER_NUM></I_PURCHASEORDER_NUM>
          <!--Optional:-->
          <I_PURCHASE_ORDER></I_PURCHASE_ORDER>
          <!--Optional:-->
          <I_SALESORG></I_SALESORG>
       </urn:ZSD_SALESORDER_GETLIST_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_GET_SALESORDER_LIST&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.post("/inquiry", function (req, res) {
   uname = req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZSD_INQUIRY_SUJ>
          <!--You may enter the following 2 items in any order-->
          <I_CUSTID>`+ uname + `</I_CUSTID>
          <!--Optional:-->
          <IT_FIN>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <DOC_NUMBER></DOC_NUMBER>
                <!--Optional:-->
                <ITEM_NUMBER></ITEM_NUMBER>
                <!--Optional:-->
                <MATERIAL></MATERIAL>
                <!--Optional:-->
                <SHORT_TEXT></SHORT_TEXT>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <REQ_QTY></REQ_QTY>
                <!--Optional:-->
                <CREATE_DATE></CREATE_DATE>
                <!--Optional:-->
                <NET_PRICE></NET_PRICE>
             </item>
          </IT_FIN>
       </urn:ZSD_INQUIRY_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_INQUIRY&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.post("/getpaymentaging", function (req, res) {
   uname = req.body.uname;
   companycode = req.body.companycode;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_GET_PAYMENT_AGING_SUJ>
          <!--You may enter the following 4 items in any order-->
          <I_CID>`+ uname + `</I_CID>
          <I_COMPANYCODE>`+ companycode + `</I_COMPANYCODE>
          <!--Optional:-->
          <I_DOCDATE></I_DOCDATE>
          <IT_DETAILS>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <COMP_CODE></COMP_CODE>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <SP_GL_IND></SP_GL_IND>
                <!--Optional:-->
                <CLEAR_DATE></CLEAR_DATE>
                <!--Optional:-->
                <CLR_DOC_NO></CLR_DOC_NO>
                <!--Optional:-->
                <ALLOC_NMBR></ALLOC_NMBR>
                <!--Optional:-->
                <FISC_YEAR></FISC_YEAR>
                <!--Optional:-->
                <DOC_NO></DOC_NO>
                <!--Optional:-->
                <ITEM_NUM></ITEM_NUM>
                <!--Optional:-->
                <PSTNG_DATE></PSTNG_DATE>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <ENTRY_DATE></ENTRY_DATE>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <LOC_CURRCY></LOC_CURRCY>
                <!--Optional:-->
                <REF_DOC_NO></REF_DOC_NO>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <FIS_PERIOD></FIS_PERIOD>
                <!--Optional:-->
                <POST_KEY></POST_KEY>
                <!--Optional:-->
                <DB_CR_IND></DB_CR_IND>
                <!--Optional:-->
                <BUS_AREA></BUS_AREA>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <LC_AMOUNT></LC_AMOUNT>
                <!--Optional:-->
                <AMT_DOCCUR></AMT_DOCCUR>
                <!--Optional:-->
                <LC_TAX></LC_TAX>
                <!--Optional:-->
                <TX_DOC_CUR></TX_DOC_CUR>
                <!--Optional:-->
                <ITEM_TEXT></ITEM_TEXT>
                <!--Optional:-->
                <BRANCH></BRANCH>
                <!--Optional:-->
                <BLINE_DATE></BLINE_DATE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCT_DAYS1></DSCT_DAYS1>
                <!--Optional:-->
                <DSCT_DAYS2></DSCT_DAYS2>
                <!--Optional:-->
                <NETTERMS></NETTERMS>
                <!--Optional:-->
                <DSCT_PCT1></DSCT_PCT1>
                <!--Optional:-->
                <DSCT_PCT2></DSCT_PCT2>
                <!--Optional:-->
                <DISC_BASE></DISC_BASE>
                <!--Optional:-->
                <DSC_AMT_LC></DSC_AMT_LC>
                <!--Optional:-->
                <DSC_AMT_DC></DSC_AMT_DC>
                <!--Optional:-->
                <PYMT_METH></PYMT_METH>
                <!--Optional:-->
                <PMNT_BLOCK></PMNT_BLOCK>
                <!--Optional:-->
                <FIXEDTERMS></FIXEDTERMS>
                <!--Optional:-->
                <INV_REF></INV_REF>
                <!--Optional:-->
                <INV_YEAR></INV_YEAR>
                <!--Optional:-->
                <INV_ITEM></INV_ITEM>
                <!--Optional:-->
                <DUNN_BLOCK></DUNN_BLOCK>
                <!--Optional:-->
                <DUNN_KEY></DUNN_KEY>
                <!--Optional:-->
                <LAST_DUNN></LAST_DUNN>
                <!--Optional:-->
                <DUNN_LEVEL></DUNN_LEVEL>
                <!--Optional:-->
                <DUNN_AREA></DUNN_AREA>
                <!--Optional:-->
                <DOC_STATUS></DOC_STATUS>
                <!--Optional:-->
                <NXT_DOCTYP></NXT_DOCTYP>
                <!--Optional:-->
                <VAT_REG_NO></VAT_REG_NO>
                <!--Optional:-->
                <REASON_CDE></REASON_CDE>
                <!--Optional:-->
                <PMTMTHSUPL></PMTMTHSUPL>
                <!--Optional:-->
                <REF_KEY_1></REF_KEY_1>
                <!--Optional:-->
                <REF_KEY_2></REF_KEY_2>
                <!--Optional:-->
                <T_CURRENCY></T_CURRENCY>
                <!--Optional:-->
                <AMOUNT></AMOUNT>
                <!--Optional:-->
                <NET_AMOUNT></NET_AMOUNT>
                <!--Optional:-->
                <NAME></NAME>
                <!--Optional:-->
                <NAME_2></NAME_2>
                <!--Optional:-->
                <NAME_3></NAME_3>
                <!--Optional:-->
                <NAME_4></NAME_4>
                <!--Optional:-->
                <POSTL_CODE></POSTL_CODE>
                <!--Optional:-->
                <CITY></CITY>
                <!--Optional:-->
                <COUNTRY></COUNTRY>
                <!--Optional:-->
                <STREET></STREET>
                <!--Optional:-->
                <PO_BOX></PO_BOX>
                <!--Optional:-->
                <POBX_PCD></POBX_PCD>
                <!--Optional:-->
                <POBK_CURAC></POBK_CURAC>
                <!--Optional:-->
                <BANK_ACCT></BANK_ACCT>
                <!--Optional:-->
                <BANK_KEY></BANK_KEY>
                <!--Optional:-->
                <BANK_CTRY></BANK_CTRY>
                <!--Optional:-->
                <TAX_NO_1></TAX_NO_1>
                <!--Optional:-->
                <TAX_NO_2></TAX_NO_2>
                <!--Optional:-->
                <TAX></TAX>
                <!--Optional:-->
                <EQUAL_TAX></EQUAL_TAX>
                <!--Optional:-->
                <REGION></REGION>
                <!--Optional:-->
                <CTRL_KEY></CTRL_KEY>
                <!--Optional:-->
                <INSTR_KEY></INSTR_KEY>
                <!--Optional:-->
                <PAYEE_CODE></PAYEE_CODE>
                <!--Optional:-->
                <LANGU></LANGU>
                <!--Optional:-->
                <BILL_LIFE></BILL_LIFE>
                <!--Optional:-->
                <BE_TAXCODE></BE_TAXCODE>
                <!--Optional:-->
                <BILLTAX_LC></BILLTAX_LC>
                <!--Optional:-->
                <BILLTAX_FC></BILLTAX_FC>
                <!--Optional:-->
                <LC_COL_CHG></LC_COL_CHG>
                <!--Optional:-->
                <COLL_CHARG></COLL_CHARG>
                <!--Optional:-->
                <CHGS_TX_CD></CHGS_TX_CD>
                <!--Optional:-->
                <ISSUE_DATE></ISSUE_DATE>
                <!--Optional:-->
                <USAGEDATE></USAGEDATE>
                <!--Optional:-->
                <BILL_USAGE></BILL_USAGE>
                <!--Optional:-->
                <DOMICILE></DOMICILE>
                <!--Optional:-->
                <DRAWER></DRAWER>
                <!--Optional:-->
                <CTRBNK_LOC></CTRBNK_LOC>
                <!--Optional:-->
                <DRAW_CITY1></DRAW_CITY1>
                <!--Optional:-->
                <DRAWEE></DRAWEE>
                <!--Optional:-->
                <DRAW_CITY2></DRAW_CITY2>
                <!--Optional:-->
                <DISCT_DAYS></DISCT_DAYS>
                <!--Optional:-->
                <DISCT_RATE></DISCT_RATE>
                <!--Optional:-->
                <ACCEPTED></ACCEPTED>
                <!--Optional:-->
                <BILLSTATUS></BILLSTATUS>
                <!--Optional:-->
                <PRTEST_IND></PRTEST_IND>
                <!--Optional:-->
                <BE_DEMAND></BE_DEMAND>
                <!--Optional:-->
                <OBJ_TYPE></OBJ_TYPE>
                <!--Optional:-->
                <REF_DOC></REF_DOC>
                <!--Optional:-->
                <REF_ORG_UN></REF_ORG_UN>
                <!--Optional:-->
                <REVERSAL_DOC></REVERSAL_DOC>
                <!--Optional:-->
                <SP_GL_TYPE></SP_GL_TYPE>
                <!--Optional:-->
                <NEG_POSTNG></NEG_POSTNG>
                <!--Optional:-->
                <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
                <!--Optional:-->
                <BILL_DOC></BILL_DOC>
             </item>
          </IT_DETAILS>
       </urn:ZFI_GET_PAYMENT_AGING_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_GET_PAYMENT_AGING&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.post("/creditdebit", function (req, res) {
   uname = req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZFI_CREDIT_DEBIT_MEMO_SUJ>
          <!--You may enter the following 3 items in any order-->
          <I_CID>`+ uname + `</I_CID>
          <IT_CREDIT>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWBT></PSWBT>
                <!--Optional:-->
                <PSWSL></PSWSL>
             </item>
          </IT_CREDIT>
          <IT_DEBIT>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <AUGDT></AUGDT>
                <!--Optional:-->
                <AUGBL></AUGBL>
                <!--Optional:-->
                <PSWBT></PSWBT>
                <!--Optional:-->
                <PSWSL></PSWSL>
             </item>
          </IT_DEBIT>
       </urn:ZFI_CREDIT_DEBIT_MEMO_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;

   var options = {

      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_CREDIT_DEBIT&interfaceNamespace=http://sujithcustomerportal.com',

      headers: {
         'Content-Type': 'application/xml',

         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },

      body: postData

   }

   request.post(options, function (error, response, body) {

      if (!error && response.statusCode == 200) {

         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });

         result1 = JSON.parse(result1);

         res.send(result1);

      }

   }

   );

})
app.get("/vendor-login", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_LOGIN_SUJ>
          <!--You may enter the following 2 items in any order-->
          <I_PASSWORD>SAISUJITH</I_PASSWORD>
          <I_USERNAME>SA1000</I_USERNAME>
       </urn:Z_FM_VENDOR_LOGIN_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_LOGIN&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_LOGIN_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-quotation", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_REQ_QUOTATION_SUJ>
          <!--You may enter the following 3 items in any order-->
          <I_VENDORID>SA1000</I_VENDORID>
          <IT_HEADER_RFQ_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <DOC_NUMBER></DOC_NUMBER>
                <!--Optional:-->
                <CO_CODE></CO_CODE>
                <!--Optional:-->
                <DOC_CAT></DOC_CAT>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <CNTRL_IND></CNTRL_IND>
                <!--Optional:-->
                <DELETE_IND></DELETE_IND>
                <!--Optional:-->
                <STATUS></STATUS>
                <!--Optional:-->
                <CREATED_ON></CREATED_ON>
                <!--Optional:-->
                <CREATED_BY></CREATED_BY>
                <!--Optional:-->
                <ITEM_INTVL></ITEM_INTVL>
                <!--Optional:-->
                <LAST_ITEM></LAST_ITEM>
                <!--Optional:-->
                <VENDOR></VENDOR>
                <!--Optional:-->
                <LANGUAGE></LANGUAGE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCNT1_TO></DSCNT1_TO>
                <!--Optional:-->
                <DSCNT2_TO></DSCNT2_TO>
                <!--Optional:-->
                <DSCNT3_TO></DSCNT3_TO>
                <!--Optional:-->
                <CASH_DISC1></CASH_DISC1>
                <!--Optional:-->
                <CASH_DISC2></CASH_DISC2>
                <!--Optional:-->
                <PURCH_ORG></PURCH_ORG>
                <!--Optional:-->
                <PUR_GROUP></PUR_GROUP>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <EXCH_RATE></EXCH_RATE>
                <!--Optional:-->
                <EX_RATE_FX></EX_RATE_FX>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <VPER_START></VPER_START>
                <!--Optional:-->
                <VPER_END></VPER_END>
                <!--Optional:-->
                <APPLIC_BY></APPLIC_BY>
                <!--Optional:-->
                <QUOT_DEAD></QUOT_DEAD>
                <!--Optional:-->
                <BINDG_PER></BINDG_PER>
                <!--Optional:-->
                <WARRANTY></WARRANTY>
                <!--Optional:-->
                <BIDINV_NO></BIDINV_NO>
                <!--Optional:-->
                <QUOTATION></QUOTATION>
                <!--Optional:-->
                <QUOT_DATE></QUOT_DATE>
                <!--Optional:-->
                <REF_1></REF_1>
                <!--Optional:-->
                <SALES_PERS></SALES_PERS>
                <!--Optional:-->
                <TELEPHONE></TELEPHONE>
                <!--Optional:-->
                <SUPPL_VEND></SUPPL_VEND>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <AGREEMENT></AGREEMENT>
                <!--Optional:-->
                <REJ_REASON></REJ_REASON>
                <!--Optional:-->
                <COMPL_DLV></COMPL_DLV>
                <!--Optional:-->
                <GR_MESSAGE></GR_MESSAGE>
                <!--Optional:-->
                <SUPPL_PLNT></SUPPL_PLNT>
                <!--Optional:-->
                <RCVG_VEND></RCVG_VEND>
                <!--Optional:-->
                <INCOTERMS1></INCOTERMS1>
                <!--Optional:-->
                <INCOTERMS2></INCOTERMS2>
                <!--Optional:-->
                <TARGET_VAL></TARGET_VAL>
                <!--Optional:-->
                <COLL_NO></COLL_NO>
                <!--Optional:-->
                <DOC_COND></DOC_COND>
                <!--Optional:-->
                <PROCEDURE></PROCEDURE>
                <!--Optional:-->
                <UPDATE_GRP></UPDATE_GRP>
                <!--Optional:-->
                <DIFF_INV></DIFF_INV>
                <!--Optional:-->
                <EXPORT_NO></EXPORT_NO>
                <!--Optional:-->
                <OUR_REF></OUR_REF>
                <!--Optional:-->
                <LOGSYSTEM></LOGSYSTEM>
                <!--Optional:-->
                <SUBITEMINT></SUBITEMINT>
                <!--Optional:-->
                <MAST_COND></MAST_COND>
                <!--Optional:-->
                <REL_GROUP></REL_GROUP>
                <!--Optional:-->
                <REL_STRAT></REL_STRAT>
                <!--Optional:-->
                <REL_IND></REL_IND>
                <!--Optional:-->
                <REL_STATUS></REL_STATUS>
                <!--Optional:-->
                <SUBJ_TO_R></SUBJ_TO_R>
                <!--Optional:-->
                <TAXR_CNTRY></TAXR_CNTRY>
                <!--Optional:-->
                <SCHED_IND></SCHED_IND>
                <!--Optional:-->
                <VEND_NAME></VEND_NAME>
                <!--Optional:-->
                <CURRENCY_ISO></CURRENCY_ISO>
                <!--Optional:-->
                <EXCH_RATE_CM></EXCH_RATE_CM>
                <!--Optional:-->
                <TRNSP_MODE></TRNSP_MODE>
                <!--Optional:-->
                <CUSTOMS></CUSTOMS>
             </item>
          </IT_HEADER_RFQ_T>
          <IT_ITEM_RFQ_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <DOC_NUMBER></DOC_NUMBER>
                <!--Optional:-->
                <DOC_ITEM></DOC_ITEM>
                <!--Optional:-->
                <DELETE_IND></DELETE_IND>
                <!--Optional:-->
                <STATUS></STATUS>
                <!--Optional:-->
                <CHANGED_ON></CHANGED_ON>
                <!--Optional:-->
                <SHORT_TEXT></SHORT_TEXT>
                <!--Optional:-->
                <MATERIAL></MATERIAL>
                <!--Optional:-->
                <PUR_MAT></PUR_MAT>
                <!--Optional:-->
                <CO_CODE></CO_CODE>
                <!--Optional:-->
                <PLANT></PLANT>
                <!--Optional:-->
                <STORE_LOC></STORE_LOC>
                <!--Optional:-->
                <TRACKINGNO></TRACKINGNO>
                <!--Optional:-->
                <MAT_GRP></MAT_GRP>
                <!--Optional:-->
                <INFO_REC></INFO_REC>
                <!--Optional:-->
                <VEND_MAT></VEND_MAT>
                <!--Optional:-->
                <TARGET_QTY></TARGET_QTY>
                <!--Optional:-->
                <QUANTITY></QUANTITY>
                <!--Optional:-->
                <UNIT></UNIT>
                <!--Optional:-->
                <ORDERPR_UN></ORDERPR_UN>
                <!--Optional:-->
                <CONV_NUM1></CONV_NUM1>
                <!--Optional:-->
                <CONV_DEN1></CONV_DEN1>
                <!--Optional:-->
                <CONV_NUM2></CONV_NUM2>
                <!--Optional:-->
                <CONV_DEN2></CONV_DEN2>
                <!--Optional:-->
                <NET_PRICE></NET_PRICE>
                <!--Optional:-->
                <PRICE_UNIT></PRICE_UNIT>
                <!--Optional:-->
                <NET_VALUE></NET_VALUE>
                <!--Optional:-->
                <GROS_VALUE></GROS_VALUE>
                <!--Optional:-->
                <QUOT_DEAD></QUOT_DEAD>
                <!--Optional:-->
                <GR_PR_TIME></GR_PR_TIME>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <SETT_GRP1></SETT_GRP1>
                <!--Optional:-->
                <QUAL_INSP></QUAL_INSP>
                <!--Optional:-->
                <INFO_UPD></INFO_UPD>
                <!--Optional:-->
                <PRNT_PRICE></PRNT_PRICE>
                <!--Optional:-->
                <EST_PRICE></EST_PRICE>
                <!--Optional:-->
                <NUM_REMIND></NUM_REMIND>
                <!--Optional:-->
                <REMINDER1></REMINDER1>
                <!--Optional:-->
                <REMINDER2></REMINDER2>
                <!--Optional:-->
                <REMINDER3></REMINDER3>
                <!--Optional:-->
                <OVERDELTOL></OVERDELTOL>
                <!--Optional:-->
                <UNLIMITED></UNLIMITED>
                <!--Optional:-->
                <UNDER_TOL></UNDER_TOL>
                <!--Optional:-->
                <VAL_TYPE></VAL_TYPE>
                <!--Optional:-->
                <VAL_CAT></VAL_CAT>
                <!--Optional:-->
                <REJ_IND></REJ_IND>
                <!--Optional:-->
                <COMMENT></COMMENT>
                <!--Optional:-->
                <DEL_COMPL></DEL_COMPL>
                <!--Optional:-->
                <FINAL_INV></FINAL_INV>
                <!--Optional:-->
                <ITEM_CAT></ITEM_CAT>
                <!--Optional:-->
                <ACCTASSCAT></ACCTASSCAT>
                <!--Optional:-->
                <CONSUMPT></CONSUMPT>
                <!--Optional:-->
                <DISTRIB></DISTRIB>
                <!--Optional:-->
                <PART_INV></PART_INV>
                <!--Optional:-->
                <GR_IND></GR_IND>
                <!--Optional:-->
                <GR_NON_VAL></GR_NON_VAL>
                <!--Optional:-->
                <IR_IND></IR_IND>
                <!--Optional:-->
                <GR_BASEDIV></GR_BASEDIV>
                <!--Optional:-->
                <ACKN_REQD></ACKN_REQD>
                <!--Optional:-->
                <ACKNOWL_NO></ACKNOWL_NO>
                <!--Optional:-->
                <AGREEMENT></AGREEMENT>
                <!--Optional:-->
                <AGMT_ITEM></AGMT_ITEM>
                <!--Optional:-->
                <RECON_DATE></RECON_DATE>
                <!--Optional:-->
                <AGRCUMQTY></AGRCUMQTY>
                <!--Optional:-->
                <FIRM_ZONE></FIRM_ZONE>
                <!--Optional:-->
                <TRADE_OFF></TRADE_OFF>
                <!--Optional:-->
                <BOM_EXPL></BOM_EXPL>
                <!--Optional:-->
                <EXCLUSION></EXCLUSION>
                <!--Optional:-->
                <BASE_UNIT></BASE_UNIT>
                <!--Optional:-->
                <SHIPPING></SHIPPING>
                <!--Optional:-->
                <OUTL_TARGV></OUTL_TARGV>
                <!--Optional:-->
                <NOND_ITAX></NOND_ITAX>
                <!--Optional:-->
                <RELORD_QTY></RELORD_QTY>
                <!--Optional:-->
                <PRICE_DATE></PRICE_DATE>
                <!--Optional:-->
                <DOC_CAT></DOC_CAT>
                <!--Optional:-->
                <EFF_VALUE></EFF_VALUE>
                <!--Optional:-->
                <COMMITMENT></COMMITMENT>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <ADDRESS></ADDRESS>
                <!--Optional:-->
                <COND_GROUP></COND_GROUP>
                <!--Optional:-->
                <NO_C_DISC></NO_C_DISC>
                <!--Optional:-->
                <UPDATE_GRP></UPDATE_GRP>
                <!--Optional:-->
                <PLAN_DEL></PLAN_DEL>
                <!--Optional:-->
                <NET_WEIGHT></NET_WEIGHT>
                <!--Optional:-->
                <WEIGHTUNIT></WEIGHTUNIT>
                <!--Optional:-->
                <TAX_JUR_CD></TAX_JUR_CD>
                <!--Optional:-->
                <PRINT_REL></PRINT_REL>
                <!--Optional:-->
                <SPEC_STOCK></SPEC_STOCK>
                <!--Optional:-->
                <SETRESERNO></SETRESERNO>
                <!--Optional:-->
                <SETTLITMNO></SETTLITMNO>
                <!--Optional:-->
                <NOT_CHGBL></NOT_CHGBL>
                <!--Optional:-->
                <CTR_KEY_QM></CTR_KEY_QM>
                <!--Optional:-->
                <CERT_TYPE></CERT_TYPE>
                <!--Optional:-->
                <EAN_UPC></EAN_UPC>
                <!--Optional:-->
                <CONF_CTRL></CONF_CTRL>
                <!--Optional:-->
                <REV_LEV></REV_LEV>
                <!--Optional:-->
                <FUND></FUND>
                <!--Optional:-->
                <FUNDS_CTR></FUNDS_CTR>
                <!--Optional:-->
                <CMMT_ITEM></CMMT_ITEM>
                <!--Optional:-->
                <BA_PARTNER></BA_PARTNER>
                <!--Optional:-->
                <PTR_ASS_BA></PTR_ASS_BA>
                <!--Optional:-->
                <PROFIT_CTR></PROFIT_CTR>
                <!--Optional:-->
                <PARTNER_PC></PARTNER_PC>
                <!--Optional:-->
                <PRICE_CTR></PRICE_CTR>
                <!--Optional:-->
                <GROSS_WGHT></GROSS_WGHT>
                <!--Optional:-->
                <VOLUME></VOLUME>
                <!--Optional:-->
                <VOLUMEUNIT></VOLUMEUNIT>
                <!--Optional:-->
                <INCOTERMS1></INCOTERMS1>
                <!--Optional:-->
                <INCOTERMS2></INCOTERMS2>
                <!--Optional:-->
                <ADVANCE></ADVANCE>
                <!--Optional:-->
                <PRIOR_VEND></PRIOR_VEND>
                <!--Optional:-->
                <SUB_RANGE></SUB_RANGE>
                <!--Optional:-->
                <PCKG_NO></PCKG_NO>
                <!--Optional:-->
                <STATISTIC></STATISTIC>
                <!--Optional:-->
                <HL_ITEM></HL_ITEM>
                <!--Optional:-->
                <GR_TO_DATE></GR_TO_DATE>
                <!--Optional:-->
                <SUPPL_VEND></SUPPL_VEND>
                <!--Optional:-->
                <SC_VENDOR></SC_VENDOR>
                <!--Optional:-->
                <CONF_MATL></CONF_MATL>
                <!--Optional:-->
                <MAT_CAT></MAT_CAT>
                <!--Optional:-->
                <KANBAN_IND></KANBAN_IND>
                <!--Optional:-->
                <ADDRESS2></ADDRESS2>
                <!--Optional:-->
                <INT_OBJ_NO></INT_OBJ_NO>
                <!--Optional:-->
                <ERS></ERS>
                <!--Optional:-->
                <GRSETTFROM></GRSETTFROM>
                <!--Optional:-->
                <LAST_TRANS></LAST_TRANS>
                <!--Optional:-->
                <TRANS_TIME></TRANS_TIME>
                <!--Optional:-->
                <SER_NO></SER_NO>
                <!--Optional:-->
                <PROMOTION></PROMOTION>
                <!--Optional:-->
                <ALLOC_TBL></ALLOC_TBL>
                <!--Optional:-->
                <AT_ITEM></AT_ITEM>
                <!--Optional:-->
                <POINTS></POINTS>
                <!--Optional:-->
                <POINTS_UN></POINTS_UN>
                <!--Optional:-->
                <SEASON_TY></SEASON_TY>
                <!--Optional:-->
                <SEASON_YR></SEASON_YR>
                <!--Optional:-->
                <SETT_GRP_2></SETT_GRP_2>
                <!--Optional:-->
                <SETT_GRP_3></SETT_GRP_3>
                <!--Optional:-->
                <SETT_ITEM></SETT_ITEM>
                <!--Optional:-->
                <ML_AKT></ML_AKT>
                <!--Optional:-->
                <REMSHLIFE></REMSHLIFE>
                <!--Optional:-->
                <RFQ></RFQ>
                <!--Optional:-->
                <RFQ_ITEM></RFQ_ITEM>
                <!--Optional:-->
                <CONFIG_ORG></CONFIG_ORG>
                <!--Optional:-->
                <QUOTAUSAGE></QUOTAUSAGE>
                <!--Optional:-->
                <SPSTCK_PHY></SPSTCK_PHY>
                <!--Optional:-->
                <PREQ_NO></PREQ_NO>
                <!--Optional:-->
                <PREQ_ITEM></PREQ_ITEM>
                <!--Optional:-->
                <MAT_TYPE></MAT_TYPE>
                <!--Optional:-->
                <SI_CAT></SI_CAT>
                <!--Optional:-->
                <SUB_ITEMS></SUB_ITEMS>
                <!--Optional:-->
                <SUBTOTAL_1></SUBTOTAL_1>
                <!--Optional:-->
                <SUBTOTAL_2></SUBTOTAL_2>
                <!--Optional:-->
                <SUBTOTAL_3></SUBTOTAL_3>
                <!--Optional:-->
                <SUBTOTAL_4></SUBTOTAL_4>
                <!--Optional:-->
                <SUBTOTAL_5></SUBTOTAL_5>
                <!--Optional:-->
                <SUBTOTAL_6></SUBTOTAL_6>
                <!--Optional:-->
                <SUBITM_KEY></SUBITM_KEY>
                <!--Optional:-->
                <MAX_CMG></MAX_CMG>
                <!--Optional:-->
                <MAX_CPGO></MAX_CPGO>
                <!--Optional:-->
                <RET_ITEM></RET_ITEM>
                <!--Optional:-->
                <AT_RELEV></AT_RELEV>
                <!--Optional:-->
                <ORD_REAS></ORD_REAS>
                <!--Optional:-->
                <DEL_TYP_RT></DEL_TYP_RT>
                <!--Optional:-->
                <PRDTE_CTRL></PRDTE_CTRL>
                <!--Optional:-->
                <MANUF_PROF></MANUF_PROF>
                <!--Optional:-->
                <MANU_MAT></MANU_MAT>
                <!--Optional:-->
                <MFR_NO></MFR_NO>
                <!--Optional:-->
                <MFR_NO_EXT></MFR_NO_EXT>
                <!--Optional:-->
                <ITEM_CAT_EXT></ITEM_CAT_EXT>
                <!--Optional:-->
                <PO_UNIT_ISO></PO_UNIT_ISO>
                <!--Optional:-->
                <ORDERPR_UN_ISO></ORDERPR_UN_ISO>
                <!--Optional:-->
                <BASE_UOM_ISO></BASE_UOM_ISO>
                <!--Optional:-->
                <WEIGHTUNIT_ISO></WEIGHTUNIT_ISO>
                <!--Optional:-->
                <VOLUMEUNIT_ISO></VOLUMEUNIT_ISO>
                <!--Optional:-->
                <POINTS_UN_ISO></POINTS_UN_ISO>
                <!--Optional:-->
                <PREQ_NAME></PREQ_NAME>
                <!--Optional:-->
                <BUS_TRANST></BUS_TRANST>
                <!--Optional:-->
                <EXPIMPPROC></EXPIMPPROC>
                <!--Optional:-->
                <COMM_CODE></COMM_CODE>
                <!--Optional:-->
                <REG_ORIGIN></REG_ORIGIN>
                <!--Optional:-->
                <COUNT_ORIG></COUNT_ORIG>
                <!--Optional:-->
                <PO_PRICE></PO_PRICE>
                <!--Optional:-->
                <NO_ROUNDING></NO_ROUNDING>
             </item>
          </IT_ITEM_RFQ_T>
       </urn:Z_FM_VENDOR_REQ_QUOTATION_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_QUOTATION&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_REQ_QUOTATION_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-purchaseorder", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_PURCHASE_ORDER_SUJ>
          <!--You may enter the following 4 items in any order-->
          <I_VENDORID>SA1000</I_VENDORID>
          <IT_HEADER_PO_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <PO_NUMBER></PO_NUMBER>
                <!--Optional:-->
                <CO_CODE></CO_CODE>
                <!--Optional:-->
                <DOC_CAT></DOC_CAT>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <CNTRL_IND></CNTRL_IND>
                <!--Optional:-->
                <DELETE_IND></DELETE_IND>
                <!--Optional:-->
                <STATUS></STATUS>
                <!--Optional:-->
                <CREATED_ON></CREATED_ON>
                <!--Optional:-->
                <CREATED_BY></CREATED_BY>
                <!--Optional:-->
                <ITEM_INTVL></ITEM_INTVL>
                <!--Optional:-->
                <LAST_ITEM></LAST_ITEM>
                <!--Optional:-->
                <VENDOR></VENDOR>
                <!--Optional:-->
                <LANGUAGE></LANGUAGE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCNT1_TO></DSCNT1_TO>
                <!--Optional:-->
                <DSCNT2_TO></DSCNT2_TO>
                <!--Optional:-->
                <DSCNT3_TO></DSCNT3_TO>
                <!--Optional:-->
                <CASH_DISC1></CASH_DISC1>
                <!--Optional:-->
                <CASH_DISC2></CASH_DISC2>
                <!--Optional:-->
                <PURCH_ORG></PURCH_ORG>
                <!--Optional:-->
                <PUR_GROUP></PUR_GROUP>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <EXCH_RATE></EXCH_RATE>
                <!--Optional:-->
                <EX_RATE_FX></EX_RATE_FX>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <VPER_START></VPER_START>
                <!--Optional:-->
                <VPER_END></VPER_END>
                <!--Optional:-->
                <APPLIC_BY></APPLIC_BY>
                <!--Optional:-->
                <QUOT_DEAD></QUOT_DEAD>
                <!--Optional:-->
                <BINDG_PER></BINDG_PER>
                <!--Optional:-->
                <WARRANTY></WARRANTY>
                <!--Optional:-->
                <BIDINV_NO></BIDINV_NO>
                <!--Optional:-->
                <QUOTATION></QUOTATION>
                <!--Optional:-->
                <QUOT_DATE></QUOT_DATE>
                <!--Optional:-->
                <REF_1></REF_1>
                <!--Optional:-->
                <SALES_PERS></SALES_PERS>
                <!--Optional:-->
                <TELEPHONE></TELEPHONE>
                <!--Optional:-->
                <SUPPL_VEND></SUPPL_VEND>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <AGREEMENT></AGREEMENT>
                <!--Optional:-->
                <REJ_REASON></REJ_REASON>
                <!--Optional:-->
                <COMPL_DLV></COMPL_DLV>
                <!--Optional:-->
                <GR_MESSAGE></GR_MESSAGE>
                <!--Optional:-->
                <SUPPL_PLNT></SUPPL_PLNT>
                <!--Optional:-->
                <RCVG_VEND></RCVG_VEND>
                <!--Optional:-->
                <INCOTERMS1></INCOTERMS1>
                <!--Optional:-->
                <INCOTERMS2></INCOTERMS2>
                <!--Optional:-->
                <TARGET_VAL></TARGET_VAL>
                <!--Optional:-->
                <COLL_NO></COLL_NO>
                <!--Optional:-->
                <DOC_COND></DOC_COND>
                <!--Optional:-->
                <PROCEDURE></PROCEDURE>
                <!--Optional:-->
                <UPDATE_GRP></UPDATE_GRP>
                <!--Optional:-->
                <DIFF_INV></DIFF_INV>
                <!--Optional:-->
                <EXPORT_NO></EXPORT_NO>
                <!--Optional:-->
                <OUR_REF></OUR_REF>
                <!--Optional:-->
                <LOGSYSTEM></LOGSYSTEM>
                <!--Optional:-->
                <SUBITEMINT></SUBITEMINT>
                <!--Optional:-->
                <MAST_COND></MAST_COND>
                <!--Optional:-->
                <REL_GROUP></REL_GROUP>
                <!--Optional:-->
                <REL_STRAT></REL_STRAT>
                <!--Optional:-->
                <REL_IND></REL_IND>
                <!--Optional:-->
                <REL_STATUS></REL_STATUS>
                <!--Optional:-->
                <SUBJ_TO_R></SUBJ_TO_R>
                <!--Optional:-->
                <TAXR_CNTRY></TAXR_CNTRY>
                <!--Optional:-->
                <SCHED_IND></SCHED_IND>
                <!--Optional:-->
                <VEND_NAME></VEND_NAME>
                <!--Optional:-->
                <CURRENCY_ISO></CURRENCY_ISO>
                <!--Optional:-->
                <EXCH_RATE_CM></EXCH_RATE_CM>
                <!--Optional:-->
                <HOLD></HOLD>
             </item>
          </IT_HEADER_PO_T>
          <IT_ITEMS_PO_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <PO_NUMBER></PO_NUMBER>
                <!--Optional:-->
                <PO_ITEM></PO_ITEM>
                <!--Optional:-->
                <DELETE_IND></DELETE_IND>
                <!--Optional:-->
                <STATUS></STATUS>
                <!--Optional:-->
                <CHANGED_ON></CHANGED_ON>
                <!--Optional:-->
                <SHORT_TEXT></SHORT_TEXT>
                <!--Optional:-->
                <MATERIAL></MATERIAL>
                <!--Optional:-->
                <PUR_MAT></PUR_MAT>
                <!--Optional:-->
                <CO_CODE></CO_CODE>
                <!--Optional:-->
                <PLANT></PLANT>
                <!--Optional:-->
                <STORE_LOC></STORE_LOC>
                <!--Optional:-->
                <TRACKINGNO></TRACKINGNO>
                <!--Optional:-->
                <MAT_GRP></MAT_GRP>
                <!--Optional:-->
                <INFO_REC></INFO_REC>
                <!--Optional:-->
                <VEND_MAT></VEND_MAT>
                <!--Optional:-->
                <TARGET_QTY></TARGET_QTY>
                <!--Optional:-->
                <QUANTITY></QUANTITY>
                <!--Optional:-->
                <UNIT></UNIT>
                <!--Optional:-->
                <ORDERPR_UN></ORDERPR_UN>
                <!--Optional:-->
                <CONV_NUM1></CONV_NUM1>
                <!--Optional:-->
                <CONV_DEN1></CONV_DEN1>
                <!--Optional:-->
                <CONV_NUM2></CONV_NUM2>
                <!--Optional:-->
                <CONV_DEN2></CONV_DEN2>
                <!--Optional:-->
                <NET_PRICE></NET_PRICE>
                <!--Optional:-->
                <PRICE_UNIT></PRICE_UNIT>
                <!--Optional:-->
                <NET_VALUE></NET_VALUE>
                <!--Optional:-->
                <GROS_VALUE></GROS_VALUE>
                <!--Optional:-->
                <QUOT_DEAD></QUOT_DEAD>
                <!--Optional:-->
                <GR_PR_TIME></GR_PR_TIME>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <SETT_GRP1></SETT_GRP1>
                <!--Optional:-->
                <QUAL_INSP></QUAL_INSP>
                <!--Optional:-->
                <INFO_UPD></INFO_UPD>
                <!--Optional:-->
                <PRNT_PRICE></PRNT_PRICE>
                <!--Optional:-->
                <EST_PRICE></EST_PRICE>
                <!--Optional:-->
                <NUM_REMIND></NUM_REMIND>
                <!--Optional:-->
                <REMINDER1></REMINDER1>
                <!--Optional:-->
                <REMINDER2></REMINDER2>
                <!--Optional:-->
                <REMINDER3></REMINDER3>
                <!--Optional:-->
                <OVERDELTOL></OVERDELTOL>
                <!--Optional:-->
                <UNLIMITED></UNLIMITED>
                <!--Optional:-->
                <UNDER_TOL></UNDER_TOL>
                <!--Optional:-->
                <VAL_TYPE></VAL_TYPE>
                <!--Optional:-->
                <VAL_CAT></VAL_CAT>
                <!--Optional:-->
                <REJ_IND></REJ_IND>
                <!--Optional:-->
                <COMMENT></COMMENT>
                <!--Optional:-->
                <DEL_COMPL></DEL_COMPL>
                <!--Optional:-->
                <FINAL_INV></FINAL_INV>
                <!--Optional:-->
                <ITEM_CAT></ITEM_CAT>
                <!--Optional:-->
                <ACCTASSCAT></ACCTASSCAT>
                <!--Optional:-->
                <CONSUMPT></CONSUMPT>
                <!--Optional:-->
                <DISTRIB></DISTRIB>
                <!--Optional:-->
                <PART_INV></PART_INV>
                <!--Optional:-->
                <GR_IND></GR_IND>
                <!--Optional:-->
                <GR_NON_VAL></GR_NON_VAL>
                <!--Optional:-->
                <IR_IND></IR_IND>
                <!--Optional:-->
                <GR_BASEDIV></GR_BASEDIV>
                <!--Optional:-->
                <ACKN_REQD></ACKN_REQD>
                <!--Optional:-->
                <ACKNOWL_NO></ACKNOWL_NO>
                <!--Optional:-->
                <AGREEMENT></AGREEMENT>
                <!--Optional:-->
                <AGMT_ITEM></AGMT_ITEM>
                <!--Optional:-->
                <RECON_DATE></RECON_DATE>
                <!--Optional:-->
                <AGRCUMQTY></AGRCUMQTY>
                <!--Optional:-->
                <FIRM_ZONE></FIRM_ZONE>
                <!--Optional:-->
                <TRADE_OFF></TRADE_OFF>
                <!--Optional:-->
                <BOM_EXPL></BOM_EXPL>
                <!--Optional:-->
                <EXCLUSION></EXCLUSION>
                <!--Optional:-->
                <BASE_UNIT></BASE_UNIT>
                <!--Optional:-->
                <SHIPPING></SHIPPING>
                <!--Optional:-->
                <OUTL_TARGV></OUTL_TARGV>
                <!--Optional:-->
                <NOND_ITAX></NOND_ITAX>
                <!--Optional:-->
                <RELORD_QTY></RELORD_QTY>
                <!--Optional:-->
                <PRICE_DATE></PRICE_DATE>
                <!--Optional:-->
                <DOC_CAT></DOC_CAT>
                <!--Optional:-->
                <EFF_VALUE></EFF_VALUE>
                <!--Optional:-->
                <COMMITMENT></COMMITMENT>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <ADDRESS></ADDRESS>
                <!--Optional:-->
                <COND_GROUP></COND_GROUP>
                <!--Optional:-->
                <NO_C_DISC></NO_C_DISC>
                <!--Optional:-->
                <UPDATE_GRP></UPDATE_GRP>
                <!--Optional:-->
                <PLAN_DEL></PLAN_DEL>
                <!--Optional:-->
                <NET_WEIGHT></NET_WEIGHT>
                <!--Optional:-->
                <WEIGHTUNIT></WEIGHTUNIT>
                <!--Optional:-->
                <TAX_JUR_CD></TAX_JUR_CD>
                <!--Optional:-->
                <PRINT_REL></PRINT_REL>
                <!--Optional:-->
                <SPEC_STOCK></SPEC_STOCK>
                <!--Optional:-->
                <SETRESERNO></SETRESERNO>
                <!--Optional:-->
                <SETTLITMNO></SETTLITMNO>
                <!--Optional:-->
                <NOT_CHGBL></NOT_CHGBL>
                <!--Optional:-->
                <CTR_KEY_QM></CTR_KEY_QM>
                <!--Optional:-->
                <CERT_TYPE></CERT_TYPE>
                <!--Optional:-->
                <EAN_UPC></EAN_UPC>
                <!--Optional:-->
                <CONF_CTRL></CONF_CTRL>
                <!--Optional:-->
                <REV_LEV></REV_LEV>
                <!--Optional:-->
                <FUND></FUND>
                <!--Optional:-->
                <FUNDS_CTR></FUNDS_CTR>
                <!--Optional:-->
                <CMMT_ITEM></CMMT_ITEM>
                <!--Optional:-->
                <BA_PARTNER></BA_PARTNER>
                <!--Optional:-->
                <PTR_ASS_BA></PTR_ASS_BA>
                <!--Optional:-->
                <PROFIT_CTR></PROFIT_CTR>
                <!--Optional:-->
                <PARTNER_PC></PARTNER_PC>
                <!--Optional:-->
                <PRICE_CTR></PRICE_CTR>
                <!--Optional:-->
                <GROSS_WGHT></GROSS_WGHT>
                <!--Optional:-->
                <VOLUME></VOLUME>
                <!--Optional:-->
                <VOLUMEUNIT></VOLUMEUNIT>
                <!--Optional:-->
                <INCOTERMS1></INCOTERMS1>
                <!--Optional:-->
                <INCOTERMS2></INCOTERMS2>
                <!--Optional:-->
                <ADVANCE></ADVANCE>
                <!--Optional:-->
                <PRIOR_VEND></PRIOR_VEND>
                <!--Optional:-->
                <SUB_RANGE></SUB_RANGE>
                <!--Optional:-->
                <PCKG_NO></PCKG_NO>
                <!--Optional:-->
                <STATISTIC></STATISTIC>
                <!--Optional:-->
                <HL_ITEM></HL_ITEM>
                <!--Optional:-->
                <GR_TO_DATE></GR_TO_DATE>
                <!--Optional:-->
                <SUPPL_VEND></SUPPL_VEND>
                <!--Optional:-->
                <SC_VENDOR></SC_VENDOR>
                <!--Optional:-->
                <CONF_MATL></CONF_MATL>
                <!--Optional:-->
                <MAT_CAT></MAT_CAT>
                <!--Optional:-->
                <KANBAN_IND></KANBAN_IND>
                <!--Optional:-->
                <ADDRESS2></ADDRESS2>
                <!--Optional:-->
                <INT_OBJ_NO></INT_OBJ_NO>
                <!--Optional:-->
                <ERS></ERS>
                <!--Optional:-->
                <GRSETTFROM></GRSETTFROM>
                <!--Optional:-->
                <LAST_TRANS></LAST_TRANS>
                <!--Optional:-->
                <TRANS_TIME></TRANS_TIME>
                <!--Optional:-->
                <SER_NO></SER_NO>
                <!--Optional:-->
                <PROMOTION></PROMOTION>
                <!--Optional:-->
                <ALLOC_TBL></ALLOC_TBL>
                <!--Optional:-->
                <AT_ITEM></AT_ITEM>
                <!--Optional:-->
                <POINTS></POINTS>
                <!--Optional:-->
                <POINTS_UN></POINTS_UN>
                <!--Optional:-->
                <SEASON_TY></SEASON_TY>
                <!--Optional:-->
                <SEASON_YR></SEASON_YR>
                <!--Optional:-->
                <SETT_GRP_2></SETT_GRP_2>
                <!--Optional:-->
                <SETT_GRP_3></SETT_GRP_3>
                <!--Optional:-->
                <SETT_ITEM></SETT_ITEM>
                <!--Optional:-->
                <ML_AKT></ML_AKT>
                <!--Optional:-->
                <REMSHLIFE></REMSHLIFE>
                <!--Optional:-->
                <RFQ></RFQ>
                <!--Optional:-->
                <RFQ_ITEM></RFQ_ITEM>
                <!--Optional:-->
                <CONFIG_ORG></CONFIG_ORG>
                <!--Optional:-->
                <QUOTAUSAGE></QUOTAUSAGE>
                <!--Optional:-->
                <SPSTCK_PHY></SPSTCK_PHY>
                <!--Optional:-->
                <PREQ_NO></PREQ_NO>
                <!--Optional:-->
                <PREQ_ITEM></PREQ_ITEM>
                <!--Optional:-->
                <MAT_TYPE></MAT_TYPE>
                <!--Optional:-->
                <SI_CAT></SI_CAT>
                <!--Optional:-->
                <SUB_ITEMS></SUB_ITEMS>
                <!--Optional:-->
                <SUBTOTAL_1></SUBTOTAL_1>
                <!--Optional:-->
                <SUBTOTAL_2></SUBTOTAL_2>
                <!--Optional:-->
                <SUBTOTAL_3></SUBTOTAL_3>
                <!--Optional:-->
                <SUBTOTAL_4></SUBTOTAL_4>
                <!--Optional:-->
                <SUBTOTAL_5></SUBTOTAL_5>
                <!--Optional:-->
                <SUBTOTAL_6></SUBTOTAL_6>
                <!--Optional:-->
                <SUBITM_KEY></SUBITM_KEY>
                <!--Optional:-->
                <MAX_CMG></MAX_CMG>
                <!--Optional:-->
                <MAX_CPGO></MAX_CPGO>
                <!--Optional:-->
                <RET_ITEM></RET_ITEM>
                <!--Optional:-->
                <AT_RELEV></AT_RELEV>
                <!--Optional:-->
                <ORD_REAS></ORD_REAS>
                <!--Optional:-->
                <DEL_TYP_RT></DEL_TYP_RT>
                <!--Optional:-->
                <PRDTE_CTRL></PRDTE_CTRL>
                <!--Optional:-->
                <MANUF_PROF></MANUF_PROF>
                <!--Optional:-->
                <MANU_MAT></MANU_MAT>
                <!--Optional:-->
                <MFR_NO></MFR_NO>
                <!--Optional:-->
                <MFR_NO_EXT></MFR_NO_EXT>
                <!--Optional:-->
                <ITEM_CAT_EXT></ITEM_CAT_EXT>
                <!--Optional:-->
                <PO_UNIT_ISO></PO_UNIT_ISO>
                <!--Optional:-->
                <ORDERPR_UN_ISO></ORDERPR_UN_ISO>
                <!--Optional:-->
                <BASE_UOM_ISO></BASE_UOM_ISO>
                <!--Optional:-->
                <WEIGHTUNIT_ISO></WEIGHTUNIT_ISO>
                <!--Optional:-->
                <VOLUMEUNIT_ISO></VOLUMEUNIT_ISO>
                <!--Optional:-->
                <POINTS_UN_ISO></POINTS_UN_ISO>
                <!--Optional:-->
                <CONF_MATL_EXTERNAL></CONF_MATL_EXTERNAL>
                <!--Optional:-->
                <CONF_MATL_GUID></CONF_MATL_GUID>
                <!--Optional:-->
                <CONF_MATL_VERSION></CONF_MATL_VERSION>
                <!--Optional:-->
                <MATERIAL_EXTERNAL></MATERIAL_EXTERNAL>
                <!--Optional:-->
                <MATERIAL_GUID></MATERIAL_GUID>
                <!--Optional:-->
                <MATERIAL_VERSION></MATERIAL_VERSION>
                <!--Optional:-->
                <PUR_MAT_EXTERNAL></PUR_MAT_EXTERNAL>
                <!--Optional:-->
                <PUR_MAT_GUID></PUR_MAT_GUID>
                <!--Optional:-->
                <PUR_MAT_VERSION></PUR_MAT_VERSION>
                <!--Optional:-->
                <GRANT_NBR></GRANT_NBR>
                <!--Optional:-->
                <CMMT_ITEM_LONG></CMMT_ITEM_LONG>
                <!--Optional:-->
                <FUNC_AREA_LONG></FUNC_AREA_LONG>
                <!--Optional:-->
                <BUDGET_PERIOD></BUDGET_PERIOD>
             </item>
          </IT_ITEMS_PO_T>
          <IT_PO_DETAILS_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <EBELN></EBELN>
                <!--Optional:-->
                <EBELP></EBELP>
                <!--Optional:-->
                <VGABE></VGABE>
                <!--Optional:-->
                <BELNR></BELNR>
                <!--Optional:-->
                <CPUDT></CPUDT>
                <!--Optional:-->
                <CPUTM></CPUTM>
                <!--Optional:-->
                <BWART></BWART>
                <!--Optional:-->
                <BEWTP></BEWTP>
             </item>
          </IT_PO_DETAILS_T>
       </urn:Z_FM_VENDOR_PURCHASE_ORDER_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_PO&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_PURCHASE_ORDER_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-profileupdate", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_DETAILS_UPDATE_SUJ>
          <!--You may enter the following 9 items in any order-->
          <!--Optional:-->
          <I_ADDRESS>ADD1</I_ADDRESS>
          <!--Optional:-->
          <I_CITY>CITY</I_CITY>
          <!--Optional:-->
          <I_COUNTRY>COUNTRY</I_COUNTRY>
          <!--Optional:-->
          <I_DISTRICT>DIST</I_DISTRICT>
          <!--Optional:-->
          <I_FNAME>FNAME</I_FNAME>
          <!--Optional:-->
          <I_LNAME>LNAME</I_LNAME>
          <!--Optional:-->
          <I_PINCODE>524315</I_PINCODE>
          <!--Optional:-->
          <I_TELEPHONE>9999999</I_TELEPHONE>
          <I_VENDORID>SA1000</I_VENDORID>
       </urn:Z_FM_VENDOR_DETAILS_UPDATE_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_PROFILE_DETAILS_UPDATE&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_UPDATE_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-profiledetail", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_DETAILS_SUJ>
          <I_VENDORID>SA1000</I_VENDORID>
       </urn:Z_FM_VENDOR_DETAILS_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_PROFILE_DETAILS&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DETAILS_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-paymentaging", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_PAYMENT_AGING_SUJ>
          <!--You may enter the following 2 items in any order-->
          <I_VENDORID>SA1000</I_VENDORID>
          <IT_OUTPUT_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <COMP_CODE></COMP_CODE>
                <!--Optional:-->
                <VENDOR></VENDOR>
                <!--Optional:-->
                <SP_GL_IND></SP_GL_IND>
                <!--Optional:-->
                <CLEAR_DATE></CLEAR_DATE>
                <!--Optional:-->
                <CLR_DOC_NO></CLR_DOC_NO>
                <!--Optional:-->
                <ALLOC_NMBR></ALLOC_NMBR>
                <!--Optional:-->
                <FISC_YEAR></FISC_YEAR>
                <!--Optional:-->
                <DOC_NO></DOC_NO>
                <!--Optional:-->
                <ITEM_NUM></ITEM_NUM>
                <!--Optional:-->
                <PSTNG_DATE></PSTNG_DATE>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <ENTRY_DATE></ENTRY_DATE>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <LOC_CURRCY></LOC_CURRCY>
                <!--Optional:-->
                <REF_DOC_NO></REF_DOC_NO>
                <!--Optional:-->
                <DOC_TYPE></DOC_TYPE>
                <!--Optional:-->
                <FIS_PERIOD></FIS_PERIOD>
                <!--Optional:-->
                <POST_KEY></POST_KEY>
                <!--Optional:-->
                <DB_CR_IND></DB_CR_IND>
                <!--Optional:-->
                <BUS_AREA></BUS_AREA>
                <!--Optional:-->
                <TAX_CODE></TAX_CODE>
                <!--Optional:-->
                <LC_AMOUNT></LC_AMOUNT>
                <!--Optional:-->
                <AMT_DOCCUR></AMT_DOCCUR>
                <!--Optional:-->
                <LC_TAX></LC_TAX>
                <!--Optional:-->
                <TX_DOC_CUR></TX_DOC_CUR>
                <!--Optional:-->
                <ITEM_TEXT></ITEM_TEXT>
                <!--Optional:-->
                <BRANCH></BRANCH>
                <!--Optional:-->
                <BLINE_DATE></BLINE_DATE>
                <!--Optional:-->
                <PMNTTRMS></PMNTTRMS>
                <!--Optional:-->
                <DSCT_DAYS1></DSCT_DAYS1>
                <!--Optional:-->
                <DSCT_DAYS2></DSCT_DAYS2>
                <!--Optional:-->
                <NETTERMS></NETTERMS>
                <!--Optional:-->
                <DSCT_PCT1></DSCT_PCT1>
                <!--Optional:-->
                <DSCT_PCT2></DSCT_PCT2>
                <!--Optional:-->
                <DISC_BASE></DISC_BASE>
                <!--Optional:-->
                <DSC_AMT_LC></DSC_AMT_LC>
                <!--Optional:-->
                <DSC_AMT_DC></DSC_AMT_DC>
                <!--Optional:-->
                <PYMT_METH></PYMT_METH>
                <!--Optional:-->
                <PMNT_BLOCK></PMNT_BLOCK>
                <!--Optional:-->
                <FIXEDTERMS></FIXEDTERMS>
                <!--Optional:-->
                <INV_REF></INV_REF>
                <!--Optional:-->
                <INV_YEAR></INV_YEAR>
                <!--Optional:-->
                <INV_ITEM></INV_ITEM>
                <!--Optional:-->
                <DUNN_BLOCK></DUNN_BLOCK>
                <!--Optional:-->
                <DUNN_KEY></DUNN_KEY>
                <!--Optional:-->
                <LAST_DUNN></LAST_DUNN>
                <!--Optional:-->
                <DUNN_LEVEL></DUNN_LEVEL>
                <!--Optional:-->
                <DUNN_AREA></DUNN_AREA>
                <!--Optional:-->
                <W_TAX_CODE></W_TAX_CODE>
                <!--Optional:-->
                <W_TAX_BASE></W_TAX_BASE>
                <!--Optional:-->
                <WI_TAX_AMT></WI_TAX_AMT>
                <!--Optional:-->
                <DOC_STATUS></DOC_STATUS>
                <!--Optional:-->
                <NXT_DOCTYP></NXT_DOCTYP>
                <!--Optional:-->
                <VAT_REG_NO></VAT_REG_NO>
                <!--Optional:-->
                <EXEMPT_NO></EXEMPT_NO>
                <!--Optional:-->
                <W_TAX_EXPT></W_TAX_EXPT>
                <!--Optional:-->
                <REASON_CDE></REASON_CDE>
                <!--Optional:-->
                <PMTMTHSUPL></PMTMTHSUPL>
                <!--Optional:-->
                <REF_KEY_1></REF_KEY_1>
                <!--Optional:-->
                <REF_KEY_2></REF_KEY_2>
                <!--Optional:-->
                <T_CURRENCY></T_CURRENCY>
                <!--Optional:-->
                <AMOUNT></AMOUNT>
                <!--Optional:-->
                <NET_AMOUNT></NET_AMOUNT>
                <!--Optional:-->
                <NAME></NAME>
                <!--Optional:-->
                <NAME_2></NAME_2>
                <!--Optional:-->
                <NAME_3></NAME_3>
                <!--Optional:-->
                <NAME_4></NAME_4>
                <!--Optional:-->
                <POSTL_CODE></POSTL_CODE>
                <!--Optional:-->
                <CITY></CITY>
                <!--Optional:-->
                <COUNTRY></COUNTRY>
                <!--Optional:-->
                <STREET></STREET>
                <!--Optional:-->
                <PO_BOX></PO_BOX>
                <!--Optional:-->
                <POBX_PCD></POBX_PCD>
                <!--Optional:-->
                <POBK_CURAC></POBK_CURAC>
                <!--Optional:-->
                <BANK_ACCT></BANK_ACCT>
                <!--Optional:-->
                <BANK_KEY></BANK_KEY>
                <!--Optional:-->
                <BANK_CTRY></BANK_CTRY>
                <!--Optional:-->
                <TAX_NO_1></TAX_NO_1>
                <!--Optional:-->
                <TAX_NO_2></TAX_NO_2>
                <!--Optional:-->
                <TAX></TAX>
                <!--Optional:-->
                <EQUAL_TAX></EQUAL_TAX>
                <!--Optional:-->
                <REGION></REGION>
                <!--Optional:-->
                <CTRL_KEY></CTRL_KEY>
                <!--Optional:-->
                <INSTR_KEY></INSTR_KEY>
                <!--Optional:-->
                <PAYEE_CODE></PAYEE_CODE>
                <!--Optional:-->
                <LANGU></LANGU>
                <!--Optional:-->
                <BILL_LIFE></BILL_LIFE>
                <!--Optional:-->
                <BE_TAXCODE></BE_TAXCODE>
                <!--Optional:-->
                <BILLTAX_LC></BILLTAX_LC>
                <!--Optional:-->
                <BILLTAX_FC></BILLTAX_FC>
                <!--Optional:-->
                <LC_COL_CHG></LC_COL_CHG>
                <!--Optional:-->
                <COLL_CHARG></COLL_CHARG>
                <!--Optional:-->
                <CHGS_TX_CD></CHGS_TX_CD>
                <!--Optional:-->
                <ISSUE_DATE></ISSUE_DATE>
                <!--Optional:-->
                <USAGEDATE></USAGEDATE>
                <!--Optional:-->
                <BILL_USAGE></BILL_USAGE>
                <!--Optional:-->
                <DOMICILE></DOMICILE>
                <!--Optional:-->
                <DRAWER></DRAWER>
                <!--Optional:-->
                <CTRBNK_LOC></CTRBNK_LOC>
                <!--Optional:-->
                <DRAW_CITY1></DRAW_CITY1>
                <!--Optional:-->
                <DRAWEE></DRAWEE>
                <!--Optional:-->
                <DRAW_CITY2></DRAW_CITY2>
                <!--Optional:-->
                <DISCT_DAYS></DISCT_DAYS>
                <!--Optional:-->
                <DISCT_RATE></DISCT_RATE>
                <!--Optional:-->
                <ACCEPTED></ACCEPTED>
                <!--Optional:-->
                <BILLSTATUS></BILLSTATUS>
                <!--Optional:-->
                <PRTEST_IND></PRTEST_IND>
                <!--Optional:-->
                <BE_DEMAND></BE_DEMAND>
                <!--Optional:-->
                <OBJ_TYPE></OBJ_TYPE>
                <!--Optional:-->
                <REF_DOC></REF_DOC>
                <!--Optional:-->
                <REF_ORG_UN></REF_ORG_UN>
                <!--Optional:-->
                <REVERSAL_DOC></REVERSAL_DOC>
                <!--Optional:-->
                <SP_GL_TYPE></SP_GL_TYPE>
                <!--Optional:-->
                <NEG_POSTNG></NEG_POSTNG>
                <!--Optional:-->
                <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
             </item>
          </IT_OUTPUT_T>
       </urn:Z_FM_VENDOR_PAYMENT_AGING_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_PAYMENT_AGING&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_PAYMENT_AGING_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-goodsreceipt", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_GOODS_RECEIPT_SUJ>
          <!--You may enter the following 5 items in any order-->
          <I_VENDORID>SA1000</I_VENDORID>
          <IT_HEADER_GR_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <MAT_DOC></MAT_DOC>
                <!--Optional:-->
                <DOC_YEAR></DOC_YEAR>
                <!--Optional:-->
                <TR_EV_TYPE></TR_EV_TYPE>
                <!--Optional:-->
                <DOC_DATE></DOC_DATE>
                <!--Optional:-->
                <PSTNG_DATE></PSTNG_DATE>
                <!--Optional:-->
                <ENTRY_DATE></ENTRY_DATE>
                <!--Optional:-->
                <ENTRY_TIME></ENTRY_TIME>
                <!--Optional:-->
                <USERNAME></USERNAME>
                <!--Optional:-->
                <VER_GR_GI_SLIP></VER_GR_GI_SLIP>
                <!--Optional:-->
                <EXPIMP_NO></EXPIMP_NO>
                <!--Optional:-->
                <REF_DOC_NO></REF_DOC_NO>
                <!--Optional:-->
                <HEADER_TXT></HEADER_TXT>
                <!--Optional:-->
                <REF_DOC_NO_LONG></REF_DOC_NO_LONG>
             </item>
          </IT_HEADER_GR_T>
          <IT_ITEMS_GR_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <MAT_DOC></MAT_DOC>
                <!--Optional:-->
                <DOC_YEAR></DOC_YEAR>
                <!--Optional:-->
                <MATDOC_ITM></MATDOC_ITM>
                <!--Optional:-->
                <MATERIAL></MATERIAL>
                <!--Optional:-->
                <PLANT></PLANT>
                <!--Optional:-->
                <STGE_LOC></STGE_LOC>
                <!--Optional:-->
                <BATCH></BATCH>
                <!--Optional:-->
                <MOVE_TYPE></MOVE_TYPE>
                <!--Optional:-->
                <STCK_TYPE></STCK_TYPE>
                <!--Optional:-->
                <SPEC_STOCK></SPEC_STOCK>
                <!--Optional:-->
                <VENDOR></VENDOR>
                <!--Optional:-->
                <CUSTOMER></CUSTOMER>
                <!--Optional:-->
                <SALES_ORD></SALES_ORD>
                <!--Optional:-->
                <S_ORD_ITEM></S_ORD_ITEM>
                <!--Optional:-->
                <SCHED_LINE></SCHED_LINE>
                <!--Optional:-->
                <VAL_TYPE></VAL_TYPE>
                <!--Optional:-->
                <ENTRY_QNT></ENTRY_QNT>
                <!--Optional:-->
                <ENTRY_UOM></ENTRY_UOM>
                <!--Optional:-->
                <ENTRY_UOM_ISO></ENTRY_UOM_ISO>
                <!--Optional:-->
                <PO_PR_QNT></PO_PR_QNT>
                <!--Optional:-->
                <ORDERPR_UN></ORDERPR_UN>
                <!--Optional:-->
                <ORDERPR_UN_ISO></ORDERPR_UN_ISO>
                <!--Optional:-->
                <PO_NUMBER></PO_NUMBER>
                <!--Optional:-->
                <PO_ITEM></PO_ITEM>
                <!--Optional:-->
                <SHIPPING></SHIPPING>
                <!--Optional:-->
                <COMP_SHIP></COMP_SHIP>
                <!--Optional:-->
                <NO_MORE_GR></NO_MORE_GR>
                <!--Optional:-->
                <ITEM_TEXT></ITEM_TEXT>
                <!--Optional:-->
                <GR_RCPT></GR_RCPT>
                <!--Optional:-->
                <UNLOAD_PT></UNLOAD_PT>
                <!--Optional:-->
                <COSTCENTER></COSTCENTER>
                <!--Optional:-->
                <ORDERID></ORDERID>
                <!--Optional:-->
                <ORDER_ITNO></ORDER_ITNO>
                <!--Optional:-->
                <CALC_MOTIVE></CALC_MOTIVE>
                <!--Optional:-->
                <ASSET_NO></ASSET_NO>
                <!--Optional:-->
                <SUB_NUMBER></SUB_NUMBER>
                <!--Optional:-->
                <RESERV_NO></RESERV_NO>
                <!--Optional:-->
                <RES_ITEM></RES_ITEM>
                <!--Optional:-->
                <RES_TYPE></RES_TYPE>
                <!--Optional:-->
                <WITHDRAWN></WITHDRAWN>
                <!--Optional:-->
                <MOVE_MAT></MOVE_MAT>
                <!--Optional:-->
                <MOVE_PLANT></MOVE_PLANT>
                <!--Optional:-->
                <MOVE_STLOC></MOVE_STLOC>
                <!--Optional:-->
                <MOVE_BATCH></MOVE_BATCH>
                <!--Optional:-->
                <MOVE_VAL_TYPE></MOVE_VAL_TYPE>
                <!--Optional:-->
                <MVT_IND></MVT_IND>
                <!--Optional:-->
                <MOVE_REAS></MOVE_REAS>
                <!--Optional:-->
                <RL_EST_KEY></RL_EST_KEY>
                <!--Optional:-->
                <REF_DATE></REF_DATE>
                <!--Optional:-->
                <COST_OBJ></COST_OBJ>
                <!--Optional:-->
                <PROFIT_SEGM_NO></PROFIT_SEGM_NO>
                <!--Optional:-->
                <PROFIT_CTR></PROFIT_CTR>
                <!--Optional:-->
                <WBS_ELEM></WBS_ELEM>
                <!--Optional:-->
                <NETWORK></NETWORK>
                <!--Optional:-->
                <ACTIVITY></ACTIVITY>
                <!--Optional:-->
                <PART_ACCT></PART_ACCT>
                <!--Optional:-->
                <AMOUNT_LC></AMOUNT_LC>
                <!--Optional:-->
                <AMOUNT_SV></AMOUNT_SV>
                <!--Optional:-->
                <CURRENCY></CURRENCY>
                <!--Optional:-->
                <CURRENCY_ISO></CURRENCY_ISO>
                <!--Optional:-->
                <REF_DOC_YR></REF_DOC_YR>
                <!--Optional:-->
                <REF_DOC></REF_DOC>
                <!--Optional:-->
                <REF_DOC_IT></REF_DOC_IT>
                <!--Optional:-->
                <EXPIRYDATE></EXPIRYDATE>
                <!--Optional:-->
                <PROD_DATE></PROD_DATE>
                <!--Optional:-->
                <FUND></FUND>
                <!--Optional:-->
                <FUNDS_CTR></FUNDS_CTR>
                <!--Optional:-->
                <CMMT_ITEM></CMMT_ITEM>
                <!--Optional:-->
                <VAL_SALES_ORD></VAL_SALES_ORD>
                <!--Optional:-->
                <VAL_S_ORD_ITEM></VAL_S_ORD_ITEM>
                <!--Optional:-->
                <VAL_WBS_ELEM></VAL_WBS_ELEM>
                <!--Optional:-->
                <CO_BUSPROC></CO_BUSPROC>
                <!--Optional:-->
                <ACTTYPE></ACTTYPE>
                <!--Optional:-->
                <SUPPL_VEND></SUPPL_VEND>
                <!--Optional:-->
                <X_AUTO_CRE></X_AUTO_CRE>
                <!--Optional:-->
                <MATERIAL_EXTERNAL></MATERIAL_EXTERNAL>
                <!--Optional:-->
                <MATERIAL_GUID></MATERIAL_GUID>
                <!--Optional:-->
                <MATERIAL_VERSION></MATERIAL_VERSION>
                <!--Optional:-->
                <MOVE_MAT_EXTERNAL></MOVE_MAT_EXTERNAL>
                <!--Optional:-->
                <MOVE_MAT_GUID></MOVE_MAT_GUID>
                <!--Optional:-->
                <MOVE_MAT_VERSION></MOVE_MAT_VERSION>
                <!--Optional:-->
                <GRANT_NBR></GRANT_NBR>
                <!--Optional:-->
                <CMMT_ITEM_LONG></CMMT_ITEM_LONG>
                <!--Optional:-->
                <FUNC_AREA_LONG></FUNC_AREA_LONG>
                <!--Optional:-->
                <LINE_ID></LINE_ID>
                <!--Optional:-->
                <PARENT_ID></PARENT_ID>
                <!--Optional:-->
                <LINE_DEPTH></LINE_DEPTH>
                <!--Optional:-->
                <BUDGET_PERIOD></BUDGET_PERIOD>
                <!--Optional:-->
                <EARMARKED_NUMBER></EARMARKED_NUMBER>
                <!--Optional:-->
                <EARMARKED_ITEM></EARMARKED_ITEM>
                <!--Optional:-->
                <STK_SEGMENT></STK_SEGMENT>
             </item>
          </IT_ITEMS_GR_T>
          <IT_PO_DETAILS_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <EBELN></EBELN>
                <!--Optional:-->
                <EBELP></EBELP>
                <!--Optional:-->
                <VGABE></VGABE>
                <!--Optional:-->
                <BELNR></BELNR>
                <!--Optional:-->
                <CPUDT></CPUDT>
                <!--Optional:-->
                <CPUTM></CPUTM>
                <!--Optional:-->
                <BWART></BWART>
                <!--Optional:-->
                <BEWTP></BEWTP>
             </item>
          </IT_PO_DETAILS_T>
          <RETURN_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <TYPE></TYPE>
                <!--Optional:-->
                <ID></ID>
                <!--Optional:-->
                <NUMBER></NUMBER>
                <!--Optional:-->
                <MESSAGE></MESSAGE>
                <!--Optional:-->
                <LOG_NO></LOG_NO>
                <!--Optional:-->
                <LOG_MSG_NO></LOG_MSG_NO>
                <!--Optional:-->
                <MESSAGE_V1></MESSAGE_V1>
                <!--Optional:-->
                <MESSAGE_V2></MESSAGE_V2>
                <!--Optional:-->
                <MESSAGE_V3></MESSAGE_V3>
                <!--Optional:-->
                <MESSAGE_V4></MESSAGE_V4>
                <!--Optional:-->
                <PARAMETER></PARAMETER>
                <!--Optional:-->
                <ROW></ROW>
                <!--Optional:-->
                <FIELD></FIELD>
                <!--Optional:-->
                <SYSTEM></SYSTEM>
             </item>
          </RETURN_T>
       </urn:Z_FM_VENDOR_GOODS_RECEIPT_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_GOODS_RECEIPT&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_GOODS_RECEIPT_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-debit", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_DEBIT_SUJ>
          <!--You may enter the following 2 items in any order-->
          <I_VENDORID>SA1000</I_VENDORID>
          <IT_DEBIT_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <BELNR></BELNR>
                <!--Optional:-->
                <BUZEI></BUZEI>
                <!--Optional:-->
                <PSWSL></PSWSL>
                <!--Optional:-->
                <WRBTR></WRBTR>
                <!--Optional:-->
                <MWSKZ></MWSKZ>
                <!--Optional:-->
                <WAERS></WAERS>
                <!--Optional:-->
                <EBELP></EBELP>
                <!--Optional:-->
                <BUDAT></BUDAT>
                <!--Optional:-->
                <ZFBDT></ZFBDT>
             </item>
          </IT_DEBIT_T>
       </urn:Z_FM_VENDOR_DEBIT_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_DEBIT&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_DEBIT_SUJ.Response']);
      }
   }
   );
})
app.get("/vendor-credit", function (req, res) {
   // uname=req.body.uname;
   const postData = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FM_VENDOR_CREDIT_SUJ>
          <!--You may enter the following 2 items in any order-->
          <I_VENDORID>SA1000</I_VENDORID>
          <IT_CREDIT_T>
             <!--Zero or more repetitions:-->
             <item>
                <!--Optional:-->
                <GJAHR></GJAHR>
                <!--Optional:-->
                <BELNR></BELNR>
                <!--Optional:-->
                <BUZEI></BUZEI>
                <!--Optional:-->
                <PSWSL></PSWSL>
                <!--Optional:-->
                <WRBTR></WRBTR>
                <!--Optional:-->
                <MWSKZ></MWSKZ>
                <!--Optional:-->
                <WAERS></WAERS>
                <!--Optional:-->
                <EBELP></EBELP>
                <!--Optional:-->
                <BUDAT></BUDAT>
                <!--Optional:-->
                <ZFBDT></ZFBDT>
             </item>
          </IT_CREDIT_T>
       </urn:Z_FM_VENDOR_CREDIT_SUJ>
    </soapenv:Body>
 </soapenv:Envelope>`;
   var options = {
      url: 'http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BC_SUJ_CUSTOMER_PORTAL&receiverParty=&receiverService=&interface=SI_VENDOR_CREDIT&interfaceNamespace=http://sujithvendorportal.com',
      headers: {
         'Content-Type': 'application/xml',
         'Authorization': 'Basic UE9VU0VSOlRlY2hAMjAyMQ=='
      },
      body: postData
   }
   request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         var result1 = parser.xml2json(body, { compact: true, spaces: 4 });
         result1 = JSON.parse(result1);
         res.send(result1['SOAP:Envelope']['SOAP:Body']['ns0:Z_FM_VENDOR_CREDIT_SUJ.Response']);
      }
   }
   );
})

app.listen(3000, () => {

   console.log("serverstart")

});