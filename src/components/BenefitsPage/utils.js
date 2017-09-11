export const formatIPData = data => {
    const { patents,
        trademarks,
        copyrights,
        negative,
        internalAssessmentOfIP,
        internalIPRating } = data

    return  {
        intellectualProperty: {
            patents,
            trademarks,
            copyrights,
            negative,
            internalAssessmentOfIP,
            internalIPRating
        }
    };
};

export const formatTechData = data => {
    const  {
        licenses,
        softwareUse,
        assessment,
        internalTechRating} = data

    return {
        technology: {
            licenses,
            softwareUse,
            assessment,
            internalTechRating
        }
    };
};

export const formatOtherBenefitsData = data => {
    const {
      services,
      products,
      people,
      revenueEnhancements,
      miscellaneous,
      assessment,
      internalOtherBenefitsRating } = data

    return {
        otherBenefitsProvided: {
            services,
            products,
            people,
            revenueEnhancements,
            miscellaneous,
            assessment,
            internalOtherBenefitsRating
        }
    };
};
