from rapidfuzz.distance import Levenshtein

levenshtein_distance = Levenshtein.distance

class PronunciationScorer:
    def score(self, original: str, corrected: str) -> float:
        if not original or not corrected:
            return 0.0
        dist = levenshtein_distance(original.lower(), corrected.lower())
        max_len = max(len(original), len(corrected))
        if max_len == 0:
            return 100.0
        similarity = 1 - (dist / max_len)
        return max(0.0, min(100.0, similarity * 100))
