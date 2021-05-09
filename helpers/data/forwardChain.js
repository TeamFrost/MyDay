import kb from './database';

export const forwardChain = (assertions) => {

    // Select the first rule.
    let ruleIndex = 0;
    let rule = kb[ruleIndex];

    // While there are more rules.
    while (ruleIndex < kb.length) {
        // If all premises in the rule are in assertions
        const allPremisesExist = rule.premises.every(premise =>
            assertions.some(assertion => assertion.attribute === premise.attribute && assertion.value === premise.value)
        );
        // If all premises from the rule are in the assertions but not the conclusion.
        if (allPremisesExist && !assertions.some(assertion => assertion.attribute === rule.conclusion.attribute && assertion.value === rule.conclusion.value)) {
            // Add the conclusion to assertions.
            return rule.conclusion.value;
        }
        else {
            // Select the next rule.
            rule = kb[++ruleIndex];
        }
    }
    return "Please complete all fields";
};