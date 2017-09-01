export default const mockData = [{
    companyName: 'Target Company A',
    companyProfile: {
        yearFounded: 1987,
        location: {
            headQaurters: '123, Example Street, Atlanta, GA',
            principlePlaceOfBusiness: '456, Another Example, Denver, CO',
            otherStates: [AZ, MA, NY]
            numberOfOffices: 17
      },
      numberOfEmployees: 500,
      generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
      companyStrategy: {
          purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
          vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
          missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
          coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
          goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
      },
      industryInformation: {
          backgrond information: ' What has been going on in the industry (historic trends etc)'
          presentCondition: 'Current trends, latest developments and furture projections for industry',
          workForce: 'how many people employeed in that industry - will this stay the same or change'
      },
      companyNews: 'brief summary of recent company news'
  financialMatters: {
      statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
      assets: [{
          nameOfAsset: 'stock wth xyz',
          valueOfAsset: '500,000.00'
          },
          nameOfAsset: 'parcel of land at abc',
          valueOfAsset: '600,000,000.00'
          },
          nameOfAsset: 'building located at def',
          valueOfAsset: '12,000,000'
      }]
      totalValueOfAllAssets: function to calculate
      liabilities: [
                { nameOfAsset: 'example',
                  valueOfAsset: 500.00
               },
          ],
      totalLiabilities: 'function to calc',
      summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
      FinancialStatementsAnnual: {
          Year2017: '2017 Financial Report',
          Year2016: '2016 Financial Report',
          Year2015: '2015 Financial Report',
          Year2014: '2014 Financial Report'
      },
      FinancialStatementsQuarterly: {
          Year2017Q1: '2017 Financial Report',
          Year2017Q2: '2017 Financial Report',
          Year2017Q3: '2017 Financial Report',
          Year2016Q1: '2016 Financial Report',
          Year2016Q2: '2016 Financial Report',
          Year2016Q3: '2016 Financial Report',
          Year2016Q4: '2016 Financial Report',
          Year2015Q1: '2016 Financial Report',
          Year2015Q2: '2016 Financial Report',
          Year2015Q3: '2016 Financial Report',
          Year2015Q4: '2016 Financial Report',
      },
      FinancialStatementsMonthly:
          Year2017M1: 'Mock Financial report',
          Year2017M2: 'Mock Financial report',
          Year2017M3: 'Mock Financial report',
          Year2017M4: 'Mock Financial report',
          Year2017M5: 'Mock Financial report',
          Year2017M6: 'Mock Financial report',
          Year2017M7: 'Mock Financial report',
          Year2017M8: 'Mock Financial report',
          Year2016M1: 'Mock Financial report',
          Year2016M2: 'Mock Financial report',
          Year2016M3: 'Mock Financial report',
          Year2016M4: 'Mock Financial report',
      },
      FinancesAudited: {
          isAudited: true,
          whoAudits: 'example',
          forHowLong: 'x years'
      },
      businessMargins: {
          status: 'are business margins growing, detoriating, stagnant?',
          companyProjections: 'what does company project for future margins',
          areProjectionsReasonable:  'insight on reasonableness of projections'
      },
      internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts'
  }
  intellectualProperty: {
      patents: [{name: 'patentName', patentDetails: 'info on patent'}],
      trademarks: [{name: 'trademarkName', trademarkDetails: 'info on tradeMark'}],
      copyrights: [{name: 'copyrightName', : copyrightDetails: 'info on copyrights'}]
      litigation: 'Information on litigation involving IP, suing or being sued'
  }
  technology: {
      licenses: 'What tech licenses does company have and how critical',
      softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
      assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger'
  }
  otherConsiderations: {
      priorBusinessRelationship: 'extent of prior relationship between us and target co',
      benefitsProvidedByTarget: {
          technology: 'does target provide tech we dont have',
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          otherBenefits: 'any other benefits'
      }
      legal: {
          future: 'any legal matters arise  - ant-trust laws, or would merger violate contracts of target company, of thos company',
          current: 'is target involved in any current litigation that could affect merger, or the value of the merger to us',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          otherLitigation: 'company or people in company invovled in any other litigation that could be material - especially key employeescriminal or otherwise',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration'
          otherRegulatory: 'any other regulatory'

      },
      internalIssues: 'any internal issues at target - such as employee/mangament labor disputes'
      tax: 'any major tax considerations'
      assessment: 'assesment after evaluating these issues'

  ManagementDirectory: [{name: 'bob', cell: '555555', work: '555555'}]
  }
  finalAssessment: 'final assesment after considering all factors'
  status:
}]
