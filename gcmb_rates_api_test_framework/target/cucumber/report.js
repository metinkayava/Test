$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/GetFutureRates.feature");
formatter.feature({
  "name": "Get future rates",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@future"
    }
  ]
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get future foreign exchange reference rates.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@future"
    },
    {
      "name": "@TC_015"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests for future rates",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.FutureRateStepDefinitions.\u003cinit\u003e(FutureRateStepDefinitions.java:26)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response date is the current date",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.FutureRateStepDefinitions.\u003cinit\u003e(FutureRateStepDefinitions.java:35)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path date doesn\u0027t match.\nExpected: 2020-06-17\n  Actual: 2020-06-16\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:212)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\n\tat com.hsbc.gcmb.stepdefs.FutureRateStepDefinitions.lambda$new$1(FutureRateStepDefinitions.java:37)\n\tat ✽.the response date is the current date(classpath:features/GetFutureRates.feature:8)\n",
  "status": "failed"
});
formatter.uri("classpath:features/GetHistoricalRates.feature");
formatter.feature({
  "name": "Get historical rates",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@historical"
    }
  ]
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical foreign exchange reference rates.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_005"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2010-01-12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:25)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the default response for the historical rates for \"2010-01-12\" should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:61)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get specific historical foreign exchange reference rates.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_006"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2010-01-12\" for currencies:",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:32)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the default response for the historical rates for \"2010-01-12\" with currencies \"USD,GBP\" should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:69)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical foreign exchange reference",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_007"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2010-01-12\" with base currency \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:41)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response for a base currency of \"USD\" for historical rates for \"2010-01-12\" for all currencies should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:64)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get specific historical foreign exchange reference rates against a non default base currency.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_008"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2010-01-12\" with base currency \"USD\" for currencies:",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:50)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response for a base currency of \"USD\" for historical rates for \"2010-01-12\" with currencies \"GBP\" should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:74)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical foreign exchange reference rates, using an invalid date.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_009"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2020-13-12\" with base currency \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:41)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response is:",
  "keyword": "And ",
  "doc_string": {
    "value": "{\"error\":\"time data \u00272020-13-12\u0027 does not match format \u0027%Y-%m-%d\u0027\"}"
  }
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:38)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical foreign exchange reference rates, for an unsupported base currency.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_010"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2010-01-12\" with base currency \"UDD\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:41)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response is:",
  "keyword": "And ",
  "doc_string": {
    "value": "{\"error\":\"Base \u0027UDD\u0027 is not supported.\"}"
  }
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:38)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical foreign exchange reference rates, for an unsupported currency.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_011"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"2010-01-12\" with base currency \"USD\" for currencies:",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:50)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response is:",
  "keyword": "And ",
  "doc_string": {
    "value": "{\"error\":\"Symbols \u0027GDP\u0027 are invalid for date 2010-01-12.\"}"
  }
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:38)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical rates with a date that is too old.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_013"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"1999-01-03\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:25)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response is:",
  "keyword": "And ",
  "doc_string": {
    "value": "{\"error\":\"There is no data for dates older then 1999-01-04.\"}"
  }
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:38)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get historical rates with date 1999-01-04.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@historical"
    },
    {
      "name": "@TC_014"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests historical rates for \"1999-01-04\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:25)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the default response for the historical rates for \"1999-01-04\" should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.HistoricalRateStepDefinitions.\u003cinit\u003e(HistoricalRateStepDefinitions.java:61)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("classpath:features/GetLatestRates.feature");
formatter.feature({
  "name": "Get latest date rates",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@latest"
    }
  ]
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get the latest foreign exchange reference rates.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@latest"
    },
    {
      "name": "@TC_001"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests for the latest rates",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:22)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the default response for the latest rates should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:51)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response base currency is \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response date is in a valid format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:31)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get the latest specific foreign exchange reference rates.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@latest"
    },
    {
      "name": "@TC_002"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests the latest rates for:",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the default response for the latest rates should be in the correct format for:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:55)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response base currency is \"EUR\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response date is in a valid format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:31)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get the latest foreign exchange reference rates against a non default base currency.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@latest"
    },
    {
      "name": "@TC_003"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests the latest rates for base currency \"USD\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:35)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response for a base currency of \"USD\" should be in the correct format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:60)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response base currency is \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response date is in a valid format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:31)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API to get the latest specific foreign exchange reference rates against a non default base currency.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@latest"
    },
    {
      "name": "@TC_004"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests the latest rates for base currency \"USD\" for:",
  "rows": [
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:41)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response for a base currency of \"USD\" should be in the correct format for:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:64)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response base currency is \"USD\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:28)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response date is in a valid format",
  "keyword": "And "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:31)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Actor calls Exchange rates API with an unsupported base currency.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@latest"
    },
    {
      "name": "@TC_012"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "an actor requests the latest rates for base currency \"UDD\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.LatestRateStepDefinitions.\u003cinit\u003e(LatestRateStepDefinitions.java:35)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response status code is 400",
  "keyword": "Then "
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:23)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response is:",
  "keyword": "Then ",
  "doc_string": {
    "value": "{\"error\":\"Base \u0027UDD\u0027 is not supported.\"}"
  }
});
formatter.match({
  "location": "com.hsbc.gcmb.stepdefs.SharedStepDefinitions.\u003cinit\u003e(SharedStepDefinitions.java:38)"
});
formatter.result({
  "status": "passed"
});
});