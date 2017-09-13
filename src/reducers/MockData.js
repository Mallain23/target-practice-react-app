import { sortFunction } from '../components/actions/utils'

export const mockData = [
    { companyName: 'Target Company A',
      costOfAcquisition: '4,000,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: 'What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 12
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 13
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 14
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00',
                id: 15
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '7'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '8'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '8',
      status: 'Pending'
    },
    { companyName: 'Evil Corp',
      costOfAcquisition: '433,000,000.00',
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
              vision: 'To be the largest conglomerate in the world',
              missionStatement: 'Destroy the little guy',
              coreValues: 'Win at all costs',
              goals: 'Rapid growth and accumulation of wealth'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          }
        },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [
              { name: 'stock wth abc',
                value: '5800000.00',
                id: 16
              },
               { name: 'office equipment',
                 value: '600000000.00',
                 id: 17
              },
              { name: 'building located at def',
                value: '12000000.00',
                id: 18
              }
          ],
        totalValueOfAllAssets: '40000',
        liabilities: [
            { name: 'salaries payable',
              value: '1000000.00',
              id: 19
            },
            { name: 'judgment owed to x corp',
              value: '1000000000.00',
              id: 20
            },
            { name: 'accounts payable',
              value: '30004000.00',
              id: 21
            },
        ],
        totalLiabilities: 'function to calc',
        financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                     {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                     {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                     {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

        ],
        financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
        ],
        financesAudited: {
            isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '3'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '6'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Satan', cell: '666-666-6666', work: '666-666-6666', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '4',
      status: 'Declined'
    },
    { companyName: 'Awesome LLC',
     costOfAcquisition: '29,000,000.00',
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
              vision: 'To be the leader in solving the world problems with efficient and cost cutting solutions',
              missionStatement: 'Change the world for the better',
              coreValues: 'Collaborative environment to foster creative thinking and new ideas',
              goals: 'work with other leading companies to create new ideas and solutions for current problems'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [
              { name: 'bonds with ABC',
                value: '4000000.00',
                id: 22
              },
              { name: 'office equipment',
                value: '600000000.00',
                id: 23
              },
              { name: 'cash deposits',
                value: '1200000000.00',
                id: 24
              }
          ],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'salaries payable',
                value: '500000.00',
                id: 25
              },
              { name: 'accounts payable',
                value: '30000.00',
                id: 26
              }
           ],
        totalLiabilities: 'function to calc',
        financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                     {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                     {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                     {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

        ],
        financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                        {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
        ],
        financesAudited: {
            isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '8'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '8'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Tim White', cell: '777-666-0000', work: '123-456-7890', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '9',
      status: 'Approved'
    },
    { companyName: 'Target Company B',
      costOfAcquisition: '10,000,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 27
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 28
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 37
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00',
                id: 29
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Re,ort', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '9'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: "5"
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '5',
      status: 'Researching'
    },
    { companyName: 'Tech Co.',
      costOfAcquisition: '14,000,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 30
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 31
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 38
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00',
                id: 32
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '6'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '10'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '7',
      status: 'Pending'
    },
    { companyName: 'Great LLC',
      costOfAcquisition: '1,000,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 33
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 34
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 39
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { nameOfLiability: 'Salaries payable',
                valueOfLiability: '20000.00',
                id: 35
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual  Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '7'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '1'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '5',
      status: 'Pending'
    },
    { companyName: 'Social Media Savy',
      costOfAcquisition: '4,000,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 1
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 2
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 3
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00',
                id: 4
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '9'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '8'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '8',
      status: 'Approved'
  },
    {
      companyName: 'Machine Monsterz',
      costOfAcquisition: '8,000,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: 'What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          },
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 5
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 6
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 7
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00',
                id: 8
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '10'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '2'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '8',
      status: 'Researching'
    },
    { companyName: 'Coal Minerz Co.',
      costOfAcquisition: '300,000.00',
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
              vision: 'To provide quality services that exceeds the expectations of our esteemed customers.',
              missionStatement: 'To build long term relationships with our customers and clients and provide exceptional customer services by pursuing business through innovation and advanced technology.',
              coreValues: 'We believe in treating our customers with respect. We grow through creativity, invention and innovation. We integrate honesty, integrity and business ethics into all aspects of our business functioning',
              goals: 'Regional expansion in the field of property management and develop a strong base of key customers. Increase the assets and investments of the company to support the development of services. To build good reputation in the field of real estate and property management and become a key player in the industry'
          },
          industryInformation: {
              backgroundInformation: ' What has been going on in the industry (historic trends etc)',
              presentCondition: 'Current trends, latest developments and furture projections for industry',
              workForce: 'how many people employeed in that industry - will this stay the same or change'
          }
      },
      financialMatters: {
          statementFromCompany: 'general statement from company summarizing its current financial situation, summary of cash flow',
          assets: [{
              name: 'stock wth xyz',
              value: '500000.00',
              id: 9
              },
              {
              name: 'parcel of land at abc',
              value: '600000000.00',
              id: 10
              },
              {
              name: 'building located at def',
              value: '12000000.00',
              id: 11
          }],
          totalValueOfAllAssets: 'xyz',
          liabilities: [
              { name: 'Salaries payable',
                value: '20000.00',
                id: 12
             }
          ],
          totalLiabilities: 'function to calc',
          financialStatementsAnnual: [ {title:'2017 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2016 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2015 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'},
                                       {title:'2014 Annual Financial Statement', Report: 'Mock Report', type: 'financialStatementsAnnual'}

          ],
          financialStatementsQuarterly: [ {title: '2017 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2017 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2016 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q1 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q2 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q3 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'},
                                          {title: '2015 Q4 Financial Statement', Report: 'Mock Report', type: 'financialStatementsQuarterly'}
          ],
          financesAudited: {
              isAudited: 'yes',
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
          patents: 'Information on IP',
          trademarks: 'Information on IP',
          copyrights: 'Information on IP',
          negative: 'Information on litigation involving IP, suing or being sued',
          internalAssessmentOfIP: 'if applicable - what does the IP do for us, any value or any problems',
          internalIPRating: '2'
      },
      technology: {
          licenses: 'What tech licenses does company have and how critical',
          softwareUse: 'What software is critical to company operations, and does company have approp licenses for that software',
          benefits: 'does target provide tech we dont have or could benefit from more',
          assessment: 'assessment of tech company uses, compared to what we use - compatiable, what will have to change, how does it affect merger',
          internalTechRating: '2'
      },
      otherBenefitsProvided: {
          services: 'does target provide servies we dont have',
          products: 'does target provide products we dont have',
          people: 'will company provide people - and liklihood of rentention',
          revenueEnhancements: 'revenue enhancements provided by target',
          miscellaneous: 'any other benefits',
          assessment: 'internal assessment',
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
      managementDirectory: [{name: 'Bill Manager', cell: '123-456-7890', work: '222-333-4444', email: 'sample@gmail.com'}],
      finalAssessment: 'final assessment after considering all factors',
      overallRating: '2',
      status: 'Declined'
    }
];

export const sortedMockData = sortFunction(mockData, 'companyName')
