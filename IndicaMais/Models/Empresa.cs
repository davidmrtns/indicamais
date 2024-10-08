﻿using System.ComponentModel.DataAnnotations;

namespace IndicaMais.Models
{
    public class Empresa : IMustHaveTenant
    {
        [Key]
        public int Id { get; set; }

        [StringLength(255)]
        public string Nome { get; set; }

        public string NomeApp { get; set; }

        public byte[]? Logo { get; set; }

        public string LogoMimeType { get; set; }

        public byte[]? Favicon { get; set; }

        public string FaviconMimeType { get; set; }

        public byte[]? AppleIcon { get; set; }

        public string AppleIconMimeType { get; set; }

        [StringLength(7)]
        public string CorPrimaria { get; set; }

        [StringLength(7)]
        public string CorSecundaria { get; set; }

        [StringLength(7)]
        public string CorTerciaria { get; set; }

        [StringLength(7)]
        public string CorFundo { get; set; }

        [StringLength(7)]
        public string CorFonte { get; set; }

        [StringLength(7)]
        public string CorFonteSecundaria { get; set; }

        [Required]
        public Tenant Tenant { get; set; }
    }
}
