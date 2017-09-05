import { sortFunction } from '../components/actions/utils'

export const mockData = [
    { companyName: 'Target Company A',
      companyProfile: {
          yearFounded: '1987',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly: [
            {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '8'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '7'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '8'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '5'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '8'
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '8',
      status: 'pending'
    },
    { companyName: 'Evil Corp',
      companyProfile: {
          yearFounded: '2014',
          location: {
              headQaurters: '123, Example Street, New York, NY',
              principlePlaceOfBusiness: '123, Example Street, New York, NY',
              numberOfOffices: '500'
          },
          numberOfEmployees: '10000000',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a titan of all industries and take over the world and all markets, control all prices.',
              vistion: 'To be the largest conglomerate in the world',
              missionStatement: 'Destroy the little guy',
              coreValues: 'Win at all costs',
              goals: 'Rapid growth and accumulation of wealth'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          }
        },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [
              { name: 'stock wth abc',
                value: '5800000.00'
              },
               { name: 'office equipment',
                 value: '600000000.00'
              },
              { name: 'building located at def',
                value: '12000000.00'
              }
          ],
        totalValueOfAllAssets: '40000',
        liabilities: [
            { name: 'salaries payable',
              value: '1000000.00'
            },
            { name: 'judgment owed to x corp',
              value: '1000000000.00'
            },
            { name: 'accounts payable',
              value: '30004000.00'
            },
        ],
        totalLiabilities: 'function to calc',
        summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
        financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                     {title:'2016 Financial Report', Report: 'Mock Report'},
                                     {title:'2015 Financial Report', Report: 'Mock Report'},
                                     {title:'2014 Financial Report', Report: 'Mock Report'}

        ],
        financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                        {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                        {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q4 Financial Report', Report: 'Mock Report'}
        ],
        financialStatementsMonthly: [
          {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
        ],
        financesAudited: {
            isAudited: true,
            whoAudits: 'example',
            forHowLong: 'z years'
        },
        businessMargins: {
            status: 'are business margins growing, detoriating, stagnant?',
            companyProjections: 'what does company project for future margins',
            areProjectionsReasonable:  'insight on reasonableness of projections'
        },
        internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
        internalFinancialRating: '5'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName', details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '3'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '6'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '5'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '2'
      },
      managementDirectory: [{name: 'Satan', cell: '666-666-6666', work: '666-666-6666'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '4',
      status: 'declined'
    },
    { companyName: 'Awesome LLC',
      companyProfile: {
          yearFounded: '2000',
          location: {
              headQaurters: '1000, Awesome Lane, Atlanta, GA',
              principlePlaceOfBusiness: '200 Cool Street, Boston, MA',
              numberOfOffices: '50'
          },
          numberOfEmployees: '100000',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To provide creative solutions to current problems.',
              vistion: 'To be the leader in solving the world problems with efficient and cost cutting solutions',
              missionStatement: 'Change the world for the better',
              coreValues: 'Collaborative environment to foster creative thinking and new ideas',
              goals: 'work with other leading companies to create new ideas and solutions for current problems'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [
              { name: 'bonds with ABC',
                value: '4000000.00'
              },
              { name: 'office equipment',
                value: '600000000.00'
              },
              { name: 'cash deposits',
                value: '1200000000.00'
              }
          ],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'salaries payable',
                value: '500000.00'
              },
              { name: 'accounts payable',
                value: '30000.00'
              },
           ],
        totalLiabilities: 'function to calc',
        summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
        financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                     {title:'2016 Financial Report', Report: 'Mock Report'},
                                     {title:'2015 Financial Report', Report: 'Mock Report'},
                                     {title:'2014 Financial Report', Report: 'Mock Report'}

        ],
        financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                        {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                        {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                        {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                        {title: '2015Q4 Financial Report', Report: 'Mock Report'}
        ],
        financialStatementsMonthly: [
          {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
          {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
        ],
        financesAudited: {
            isAudited: true,
            whoAudits: 'example',
            forHowLong: 'z years'
        },
        businessMargins: {
            status: 'are business margins growing, detoriating, stagnant?',
            companyProjections: 'what does company project for future margins',
            areProjectionsReasonable:  'insight on reasonableness of projections'
        },
        internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
        internalFinancialRating: '9'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName', details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '8'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '8'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '9'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '10'
      },
      ManagementDirectory: [{name: 'Tim White', cell: '777-666-0000', work: '123-456-7890'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '9',
      status: 'approved'
    },
    { companyName: 'Target Company B',
      companyProfile: {
          yearFounded: '1987',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly: [
            {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '4'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '9'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: null
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '7'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: ''
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '5',
      status: 'researching'
    },
    { companyName: 'Tech Co.',
      companyProfile: {
          yearFounded: '1987',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly: [
            {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '3'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '6'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '10'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '5'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '4'
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '',
      status: 'pending'
    },
    { companyName: 'Great LLC',
      companyProfile: {
          yearFounded: '1987',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { nameOfLiability: 'Salaries payable',
                valueOfLiability: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly: [
            {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '3'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '7'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '1'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '2'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '3'
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '5',
      status: 'pending'
    },
    { companyName: 'Social Media Savy',
      companyProfile: {
          yearFounded: '2010',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly: [
            {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '8'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '9'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '8'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '10'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '10'
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '8',
      status: 'approved'
  },
    {
      companyName: 'Machine Monsterz',
      companyProfile: {
          yearFounded: '1987',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly:[
            {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
            {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '8'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '10'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '2'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '5'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: ''
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '8',
      status: 'researching'
    },
    { companyName: 'Coal Minerz Co.',
      companyProfile: {
          yearFounded: '1930',
          location: {
              headQaurters: '123, Example Street, Atlanta, GA',
              principlePlaceOfBusiness: '456, Another Example, Denver, CO',
              numberOfOffices: '17'
          },
          numberOfEmployees: '500',
          generalBusinessActivities: 'Summary of the scope of business and general business activities ie.  been established as a real estate company in North and South America. Our traditional business model is based on the accomplishment of properties in the real estate markets in America. Based on the decision of the company to diversify our properties; we have now established this corporation in Toronto. The revenues of our company are expected to be nearly US$50,000 per month depending on the variables that are factored in with investments in the real estate industry. There is a great need for certified or official bank checks in the future to deal with some real estate transactions. In addition to real estate investments, the company has invested portions of its assets in the purchase and sale of securities such as stocks and bonds as well as Forex trading on global markets.',
          companyStrategy: {
              purpose: 'To be a leader in the real estate industry by providing enhanced services, relationship and profitability.',
              vistion: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgrondInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          }
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00'
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00'
              },
              {
              name: 'building located at def',
              value: '12000000.00'
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { nameOfLiability: 'Salaries payable',
                valueOfLiability: '20000.00'
             }
          ],
          totalLiabilities: 'function to calc',
          summaryOnDebtOwed: 'Overall summary on debt owed by company, who they owe it to and terms in which it must be paid back',
          financialStatementsAnnual: [ {title:'2017 Financial Report', Report: 'Mock Report'},
                                       {title:'2016 Financial Report', Report: 'Mock Report'},
                                       {title:'2015 Financial Report', Report: 'Mock Report'},
                                       {title:'2014 Financial Report', Report: 'Mock Report'}

          ],
          financialStatementsQuarterly: [ {title: '2017Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2017Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2016Q4 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q1 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q2 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q3 Financial Report', Report: 'Mock Report'},
                                          {title: '2015Q4 Financial Report', Report: 'Mock Report'}
          ],
          financialStatementsMonthly: [
              {title: 'Year2017M1 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M2 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M3 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M4 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M5 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M6 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M7 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2017M8 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M1 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M2 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M3 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M4 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M5 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M6 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M7 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M8 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M9 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M10 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M11 Mock Financial report', Report: 'Mock Report'},
              {title: 'Year2016M12 Mock Financial report', Report: 'Mock Report'}
          ],
          financesAudited: {
              isAudited: true,
              whoAudits: 'example',
              forHowLong: 'x years'
          },
          businessMargins: {
              status: 'are business margins growing, detoriating, stagnant?',
              companyProjections: 'what does company project for future margins',
              areProjectionsReasonable:  'insight on reasonableness of projections'
          },
          internalAssessmentOfFinances: 'after reviewing all of companies fiancial data, what are thoughts',
          internalFinancialRating: '1'
      },
      intellectualProperty: {
          patents: [{name: 'patentName', details: 'info on patent'}],
          trademarks: [{name: 'trademarkName', details: 'info on tradeMark'}],
          copyrights: [{name: 'copyrightName',  details: 'info on copyrights'}],
          litigation: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '2'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assesment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '2'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          misccellaneous: 'any other benefits',
          assesment: 'internal assessment',
          internalOtherBenefitsRating: '1'
      },
      legal: {
          futureLitgiation: 'Wil company be involved in future litigation (companies threatening to sue, are they violating laws etc)',
          currentLitigation: 'is target involved in any current litigation  especially litigaiton that could affect merger, or the value of the merger to us',
          otherLitigation: 'company or people in company invovled in any other litigation that could be materi  al - especially key employees criminal or otherwise',
          reviewofContracts: 'review of all material contracts of target and how they affect the merger',
          threatened: 'any threatened litigation in recent past',
          settlement: 'any litigation settled, and terms of settlement',
          arbitration: 'any matters in arbitration',
          otherRegulatory: 'any other regulatory issues, antiTrust laws, trade commsion etc',
          assessment: 'assessment of legal matters',
          internalIssues: 'any internal issues at target - such as employee/mangament labor disputes',
          rating: '4'
      },
      ManagementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444'}],
      finalAssessment: 'final assesment after considering all factors',
      overallRating: '2',
      status: 'declined'
    }
];

export const sortedMockData = sortFunction(mockData, 'companyName')
