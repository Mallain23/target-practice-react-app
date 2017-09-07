export const formatBenefitsData = data => {
  const {   patents,
    trademarks,
    copyrights,
    negative,
    internalAssessmentOfIP,
    licenses,
    softwareUse,
    assessment,
    services,
    products,
    people,
    revenueEnhancements,
    miscellaneous,
    assessmentOfOtherBenefits,
    internalIPRating,
    internalTechRating,
    internalOtherBenefitsRating } = data

    return  {
        intellectualProperty: {
            patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            internalIPRating
        },
        technology: {
            licenses,
            softwareUse,
            assessment,
            internalTechRating
        },
        otherBenefitsProvided: {
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessmentOfOtherBenefits,
            internalOtherBenefitsRating
        }
    };
};
