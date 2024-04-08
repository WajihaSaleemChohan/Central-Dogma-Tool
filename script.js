function convertToRNA() {
    var dnaSequence = document.getElementById("dnaSequence").value;
    var rnaSequence = dnaSequence.replace(/T/g, "U");
    document.getElementById("rnaSequence").value = rnaSequence;
  }

  function copyToClipboard() {
    var rnaSequence = document.getElementById("rnaSequence");
    rnaSequence.select();
    document.execCommand("copy");
    alert("RNA sequence copied to clipboard!");
  }
function transcribe() {
  var dnaInput = document.getElementById("dnaInput").value.toUpperCase();
  var rnaOutput = document.getElementById("rnaOutput");
  
  // Replace T with U for transcription
  var rnaSequence = dnaInput.replace(/T/g, "U");
  
  rnaOutput.value = rnaSequence;

  
}
function translateRNA() {
  var rnaInput = document.getElementById("rnaInput").value.toUpperCase();
  var proteinOutput = document.getElementById("proteinOutput");

  var codonTable = {
    'AUA':'I', 'AUC':'I', 'AUU':'I', 'AUG':'M',
'ACA':'T', 
'AAC':'N', 'AAU':'N', 'AAA':'K', 'AAG':'K',
'AGC':'S', 'AGU':'S', 'AGA':'R', 'AGG':'R',
'CUA':'L', 'CUC':'L', 'CUG':'L', 'CUU':'L',
'CCA':'P', 'CCC':'P', 'CCG':'P','ccg': 'P', 
'CCU':'P',
'CAC':'H', 'CAU':'H', 'CAA':'Gln', 'CAG':'Gln',
'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGU':'R',
'GUA':'V', 'GUC':'V', 'GUG':'V', 'GUU':'V',
'GCA':'A', 'GCG':'A', 'GCU':'A',
'GAC':'D', 'GAU':'D', 'GAA':'E', 'GAG':'E',
'GGA':'G', 'GGC':'G', 'GGG':'G',
'UCA':'S', 'UCC':'S', 'UCG':'S', 'UCU':'S',
'UUC':'Fe', 'UUU':'Fe', 'UUA':'L', 'UUG':'L',
'UAC':'Y', 'UAU':'Y', 'UAA':'*',
'UGC':'C', 'UGU':'C', 'UGA':'*', 'UGG':'W',
'UUU': 'Fe', 'UUC': 'Fe', 'UUA': 'L', 'UUG': 'L',
'UCU': 'S', 'UCC': 'S', 'UCA': 'S', 'UCG': 'S',
 'UAC': 'Y', 'UAA': '*', 'UAG': '*',
'UGA': '*', 'UGG': 'W',
'CUU': 'L', 'CUC': 'L', 'CUA': 'L', 'CUG': 'L',
'CCU': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
'CAC': 'H', 'CAA': 'Gln', 'CAG': 'Gln',
'CGU': 'R',
'AUU': 'I', 'AUC': 'I', 'AUA': 'I', 'AUG': 'M',
'ACU': 'T', 'ACC': 'T', 'ACG': 'T',
'AAU': 'N', 'AAC': 'N',
'AGU': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
'GUU': 'V', 'GUC': 'V', 'GUA': 'V', 'GUG': 'V',
'GCC': 'A','GAG': 'E',
'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G',
'aua':'I', 'auc':'I', 'auu':'I', 'aug':'M',
'aca':'T','aac':'N', 'aau':'N', 'aaa':'K', 
'aag':'K','agc':'S', 'agu':'S', 'aga':'R', 'agg':'R',
'cua':'L', 'cuc':'L', 'cug':'L', 'cuu':'L',
'cca':'P', 'ccc':'P', 'ccg':'P', 'ccu':'P',
'cac':'H', 'caa':'Gln', 'cag':'Gln',
'cga':'R', 'cgc':'R', 'cgg':'R', 'cgu':'R',
'gua':'V', 'guc':'V', 'gug':'V', 'guu':'V',
'gca':'A', 'gcg':'A', 'gcu':'A',
'gac':'D', 'gau':'D', 'gaa':'E', 'gag':'E',
'gga':'G', 'ggc':'G', 'ggg':'G', 'ggt':'G',
'uca':'S', 'ucc':'S', 'ucg':'S', 'ucu':'S',
'uuc':'Fe', 'uuu':'Fe', 'uua':'L', 'uug':'L',
'uac':'Y', 'uau':'Y', 'uaa':'*',
'ugc':'C', 'ugu':'C', 'ugg':'W',
'uuu': 'Fe', 'uuc': 'Fe', 'uua': 'L', 'uug': 'L',
'ucu': 'S', 'ucc': 'S', 'uca': 'S', 'ucg': 'S',
'uaa': '*', 'uag': '*',
'uga': '*', 'ugg': 'W',
'cuu': 'L', 'cuc': 'L', 'cua': 'L', 'cug': 'L',
'ccu': 'P', 'ccc': 'P', 'cca': 'P', 'ccg': 'P',
'cau': 'H', 'caa': 'Gln', 'cag': 'Gln',
'cgc': 'R', 'cga': 'R', 'cgg': 'R',
'auu': 'I', 'auc': 'I', 'aua': 'I', 'aug': 'M',
'acu': 'T', 'acc': 'T', 'acg': 'T',
'aag': 'K',
'agu': 'S', 'agc': 'S', 'aga': 'R', 'agg': 'R',
'guu': 'V', 'guc': 'V', 'gua': 'V', 'gug': 'V',
'gcc': 'A','gac': 'D', 'gaa': 'E','ggu': 'G', 'ggc': 'G', 
'gga': 'G', 'ggg': 'G', 'TCT': 'S','ucu': 'S', 'UCC': 'S', 
 'ucc': 'S', 'UCA': 'S','uca': 'S'
  };

  var proteinSeq = "";
  for (var i = 0; i < rnaInput.length; i += 3) {
    var codon = rnaInput.substr(i, 3);
    var aminoAcid = codonTable[codon];
    if (aminoAcid) {
      proteinSeq += aminoAcid;
    }
  }

  proteinOutput.value = proteinSeq;
}
function copyToClipboard() {
  var rnaOutput = document.getElementById("rnaOutput");
  rnaOutput.select();
  document.execCommand("copy");
};

function Proteinsequence() {
  var proteinInput = document.getElementById("proteinInput").value.toUpperCase();
  var aminoacidOutput = document.getElementById("aminoacidOutput");

  var codonTable = {
    
'AUA':'I', 'AUC':'I', 'AUU':'I', 'AUG':'M',
'ACA':'T', 
'AAC':'N', 'AAU':'N', 'AAA':'K', 'AAG':'K',
'AGC':'S', 'AGU':'S', 'AGA':'R', 'AGG':'R',
'CUA':'L', 'CUC':'L', 'CUG':'L', 'CUU':'L',
'CCA':'P', 'CCC':'P', 'CCG':'P','ccg': 'P', 
'CCU':'P',
'CAC':'H', 'CAU':'H', 'CAA':'Gln', 'CAG':'Gln',
'CGA':'R', 'CGC':'R', 'CGG':'R', 'CGU':'R',
'GUA':'V', 'GUC':'V', 'GUG':'V', 'GUU':'V',
'GCA':'A', 'GCG':'A', 'GCU':'A',
'GAC':'D', 'GAU':'D', 'GAA':'E', 'GAG':'E',
'GGA':'G', 'GGC':'G', 'GGG':'G',
'UCA':'S', 'UCC':'S', 'UCG':'S', 'UCU':'S',
'UUC':'Fe', 'UUU':'Fe', 'UUA':'L', 'UUG':'L',
'UAC':'Y', 'UAU':'Y', 'UAA':'*',
'UGC':'C', 'UGU':'C', 'UGA':'*', 'UGG':'W',
'UUU': 'Fe', 'UUC': 'Fe', '*': 'L', 'UUG': 'L',
'UCU': 'S', 'UCC': 'S', 'UCA': 'S', 'UCG': 'S',
 'UAC': 'Y', 'UAA': '*', 'UAG': '*',
'UGA': '*', 'UGG': 'W',
'CUU': 'L', 'CUC': 'L', 'CUA': 'L', 'CUG': 'L',
'CCU': 'P', 'CCC': 'P', 'CCA': 'P', 'CCG': 'P',
'CAC': 'H', 'CAA': 'Gln', 'CAG': 'Gln',
'CGU': 'R',
'AUU': 'I', 'AUC': 'I', 'AUA': 'I', 'AUG': 'M',
'ACU': 'T', 'ACC': 'T', 'ACG': 'T',
'AAU': 'N', 'AAC': 'N',
'AGU': 'S', 'AGC': 'S', 'AGA': 'R', 'AGG': 'R',
'GUU': 'V', 'GUC': 'V', 'GUA': 'V', 'GUG': 'V',
'GCC': 'A','GAG': 'E',
'GGT': 'G', 'GGC': 'G', 'GGA': 'G', 'GGG': 'G',
'aua':'I', 'auc':'I', 'auu':'I', 'aug':'M',
'aca':'T','aac':'N', 'aau':'N', 'aaa':'K', 
'aag':'K','agc':'S', 'agu':'S', 'aga':'R', 'agg':'R',
'cua':'L', 'cuc':'L', 'cug':'L', 'cuu':'L',
'cca':'P', 'ccc':'P', 'ccg':'P', 'ccu':'P',
'cac':'H', 'caa':'Gln', 'cag':'Gln',
'cga':'R', 'cgc':'R', 'cgg':'R', 'cgu':'R',
'gua':'V', 'guc':'V', 'gug':'V', 'guu':'V',
'gca':'A', 'gcg':'A', 'gcu':'A',
'gac':'D', 'gau':'D', 'gaa':'E', 'gag':'E',
'gga':'G', 'ggc':'G', 'ggg':'G', 'ggt':'G',
'uca':'S', 'ucc':'S', 'ucg':'S', 'ucu':'S',
'uuc':'Fe', 'uuu':'Fe', 'uua':'L', 'uug':'L',
'uac':'Y', 'uau':'Y', 'uaa':'*',
'ugc':'C', 'ugu':'C', 'ugg':'W',
'uuu': 'Fe', 'uuc': 'Fe', 'uua': 'L', 'uug': 'L',
'ucu': 'S', 'ucc': 'S', 'uca': 'S', 'ucg': 'S',
'uaa': '*', 'uag': '*',
'uga': '*', 'ugg': 'W',
'cuu': 'L', 'cuc': 'L', 'cua': 'L', 'cug': 'L',
'ccu': 'P', 'ccc': 'P', 'cca': 'P', 'ccg': 'P',
'cau': 'H', 'caa': 'Gln', 'cag': 'Gln',
'cgc': 'R', 'cga': 'R', 'cgg': 'R',
'auu': 'I', 'auc': 'I', 'aua': 'I', 'aug': 'M',
'acu': 'T', 'acc': 'T', 'acg': 'T',
'aag': 'K',
'agu': 'S', 'agc': 'S', 'aga': 'R', 'agg': 'R',
'guu': 'V', 'guc': 'V', 'gua': 'V', 'gug': 'V',
'gcc': 'A','gac': 'D', 'gaa': 'E','ggu': 'G', 'ggc': 'G', 
'gga': 'G', 'ggg': 'G', 'TCT': 'S','ucu': 'S', 'UCC': 'S', 
 'ucc': 'S', 'UCA': 'S','uca': 'S'
  }

  var aminoacidSeq = "";
  for (var i = 0; i < proteinInput.length; i += 3) {
    var codon = proteinInput.substr(i, 3);
    var proteinSeq = codonTable[codon];
    if (aminoAcid) {
      aminoacidSeq += aminoAcid;
    }
  }

  aminacidOutput.value = aminoacidSeq;
};

function copyToClipboard() {
  var proteinOutput = document.getElementById("proteinOutput");
  proteinOutput.select();
  document.execCommand("copy");
}

function convertToAminoAcids() {
  var proteinInput = document.getElementById("proteinInput");
  var proteinSequence = proteinInput.value.trim().toUpperCase();
  var aminoAcids = getAminoAcids(proteinSequence);
  displayAminoAcids(aminoAcids);
}

function getAminoAcids(proteinSequence) {
  var aminoAcids = {
    'A': 'Alanine', 'R': 'Arginine', 'N': 'Asparagine', 'D': 'Aspartic Acid',
    'C': 'Cysteine', 'Q': 'Glutamine', 'E': 'Glutamic Acid', 'G': 'Glycine',
    'H': 'Histidine', 'I': 'Isoleucine', 'L': 'Leucine', 'K': 'Lysine',
    'M': 'Methionine', 'F': 'Phenylalanine', 'P': 'Proline', 'S': 'Serine',
    'T': 'Threonine', 'W': 'Tryptophan', 'Y': 'Tyrosine', 'V': 'Valine',
    '*': '*'
  };

  var aminoAcidSequence = "";
  for (var i = 0; i < proteinSequence.length; i++) {
    var aminoAcid = proteinSequence[i];
    if (aminoAcids.hasOwnProperty(aminoAcid)) {
      aminoAcidSequence += aminoAcids[aminoAcid] + ' (' + aminoAcid + ')';
      if (i < proteinSequence.length - 1) {
        aminoAcidSequence += ', ';
      }
    }
  }

  return aminoAcidSequence;
}

function displayAminoAcids(aminoAcids) {
  var aminoAcidsOutput = document.getElementById("aminoAcidsOutput");
  aminoAcidsOutput.innerHTML = "" + aminoAcids;
}