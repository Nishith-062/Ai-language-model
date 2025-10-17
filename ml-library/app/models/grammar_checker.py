from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

class GrammarChecker:
    def __init__(self):
        grammar_model_name = "vennify/t5-base-grammar-correction"
        self.tokenizer = AutoTokenizer.from_pretrained(grammar_model_name)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(grammar_model_name)

    def correct(self, text: str) -> str:
        input_text = f"fix grammar and spelling of this sentence in English: {text}"
        inputs = self.tokenizer(input_text, return_tensors="pt", max_length=512, truncation=True)
        outputs = self.model.generate(
            input_ids=inputs["input_ids"],
            attention_mask=inputs["attention_mask"],
            max_length=200
        )
        corrected = self.tokenizer.decode(outputs[0], skip_special_tokens=True)
        return corrected
