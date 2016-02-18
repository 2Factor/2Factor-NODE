/**
 * 2factor
 *
 * This file was automatically generated for 2Factor by APIMATIC BETA v2.0 on 02/18/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var ADDONSERVICESController = {

    /**
     * Check Balance For Addon Services
     * @param {string} apiKey    Required parameter: 2Factor account API Key
     * @param {string} serviceName    Required parameter: Name of the addon service
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CheckBalanceAddonServicesModel}
     */
    getCheckBalanceAddonServices : function(apiKey, serviceName, callback){
        //Assign default values
        apiKey = apiKey || "Get one from http://2Factor.in";
        serviceName = serviceName || "TRANSACTIONAL_SMS";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/V1/{api_key}/ADDON_SERVICES/BAL/{service_name}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "api_key" : apiKey,
            "service_name" : serviceName
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Pull Delivery Report - Transactional SMS
     * @param {string} apiKey    Required parameter: API Obtained From 2Factor.in
     * @param {string} sessionId    Required parameter: Session Id Returned By Send SMS Step
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getPullDeliveryReport : function(apiKey, sessionId, callback){
        //Assign default values
        apiKey = apiKey || "2Factor account API Key";
        sessionId = sessionId || "Session Id Goes here";

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/V1/{api_key}/ADDON_SERVICES/RPT/TSMS/{session_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "api_key" : apiKey,
            "session_id" : sessionId
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    },


    /**
     * Send Single / Bulk Transactional Messages / Schedule SMS
     * @param {string} apiKey    Required parameter: API Obtained From 2Factor.in
     * @param {string} from    Required parameter: 6 Character Alphabet Sender Id
     * @param {string} msg    Required parameter: SMS Body To Be Sent
     * @param {string} to    Required parameter: Comma Separated list Of Phone Numbers
     * @param {string|null} sendAt    Optional parameter: This Parameter Is Used For Scheduling SMS - Optional parameter
     * @param {Dictionary} fieldParameters    Optional parameter: Additional optional form parameters are supported by this endpoint
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SendTransactionalSmsModel}
     */
    createSendTransactionalSMS : function(apiKey, from, msg, to, sendAt, fieldParameters, callback){
        //Assign default values
        apiKey = apiKey || "2Factor account APi Key";
        from = from || "TFCTOR";
        msg = msg || "Hello World";
        to = to || "9911991199,9911991198";
        sendAt = sendAt || "2019-01-01 00:00:01";
        fieldParameters = fieldParameters || null;

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/V1/{api_key}/ADDON_SERVICES/SEND/TSMS";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "api_key" : apiKey
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json"
        };

        //prepare form data
        var form = {
            "From" : from,
            "Msg" : msg,
            "To" : to,
            "SendAt" : (null != sendAt)? sendAt: "2019-01-01 00:00:01"
        };

        //prepare optional form fields
        APIHelper.merge(form,fieldParameters)

        //Remove null values
        APIHelper.cleanObject(form);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            form : form,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
            }
        }
        request(options, cb);
        
    }

};

module.exports = ADDONSERVICESController;