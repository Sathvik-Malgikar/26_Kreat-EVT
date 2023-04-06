import openai
openai.api_key = "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"

def getresp(text):
    completion =  openai.Completion.create(
    engine="text-davinci-002",
    max_tokens = 1024,
    n=2,
    prompt="Give me keywords related to"+text
    )
    textsum=''
    for choice in completion.choices:
        textsum+=choice.text,"\n\n"
        
    return textsum