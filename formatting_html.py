import pandas as pd
import numpy as np


f = '../pc_list.csv'


df = pd.read_csv(f)
df = df.loc[:, ['Name', 'Institution', 'REPLY']]
df = df.loc[df['REPLY'] == 'Yes']

for i,row in df.iterrows():
    #print(row['Name'], row['Institution'])

    #print(df.loc[df['REPLY'] == 'Yes'])
    template = f"""
                <p>
                <b>{row['Name']}</b>, {row['Institution']};
                </p>
    """

    print(template)
