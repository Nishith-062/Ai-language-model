from app.models.grammar_checker import GrammarChecker

# Instantiate a single checker to avoid reloading the model every request
checker = GrammarChecker()

def correct_grammar(text: str) -> str:
    """
    Returns corrected grammar for a given text.
    Only the corrected text is returned.
    """
    corrected = checker.correct(text)
    
    # If your model adds extra explanation, strip it here
    # For example, remove "and I fix grammar..." if present
    if "and I fix grammar" in corrected:
        corrected = corrected.split("and I fix grammar")[0].strip()
    
    return corrected
